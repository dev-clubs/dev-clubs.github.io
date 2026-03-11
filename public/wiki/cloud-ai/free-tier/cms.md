# 🚀 Desplegar un Backend CMS en Producción usando GCP (Free Tier) y Terraform

Este tutorial demuestra el poder y la flexibilidad de **Google Cloud Platform (GCP)** guiándote paso a paso para desplegar un entorno de producción para un **backend CMS** moderno (utilizaremos Strapi como caso de uso) sin incurrir en costos, aprovechando la infraestructura como código (Terraform).

## ⚠️ Aprovechando el Free Tier de GCP

La instancia gratuita de GCP (`e2-micro`) cuenta con **1 GB de RAM**, ideal para cargas de trabajo ligeras. Sin embargo, el proceso de construcción de los CMS modernos basados en Node.js consume mucha memoria. Para demostrar la flexibilidad de las máquinas virtuales de GCP, nuestro script de Terraform configurará automáticamente un archivo de **Swap de 2GB** a nivel del sistema operativo, permitiendo que el despliegue sea exitoso sin necesidad de subir a una instancia de pago.

## 🛠️ Prerrequisitos

1. Una cuenta de Google Cloud Platform con facturación habilitada (requerido por GCP, pero no se cobrará si te mantienes dentro de los límites del nivel gratuito).

2. Tener instalado [Terraform](https://developer.hashicorp.com/terraform/downloads).

3. Tener instalado [Google Cloud CLI (`gcloud`)](https://cloud.google.com/sdk/docs/install).

4. Un proyecto creado en GCP.

## Paso 1: Autenticación en GCP

Abre tu terminal y autentica Terraform con tu cuenta de Google Cloud:

```bash
gcloud auth application-default login
gcloud config set project TU_ID_DE_PROYECTO
```

## Paso 2: Crear los archivos de Terraform

Crea un directorio para tu proyecto y dentro de él crea dos archivos: `variables.tf` y `main.tf`.

### 1. `variables.tf`

Este archivo almacenará el ID de tu proyecto.

```hcl
variable "project_id" {
  description = "El ID del proyecto de GCP"
  type        = string
  # Reemplaza con tu ID de proyecto real o pásalo al ejecutar terraform
  default     = "mi-proyecto-gcp-12345" 
}
```

### 2. `main.tf`

Este es el archivo principal. Creará la red de GCP, las reglas de firewall y aprovisionará la máquina virtual `e2-micro`. También incluye un script de inicio de GCP (Startup Script) que prepara el servidor automáticamente.

```hcl
provider "google" {
  project = var.project_id
  region  = "us-central1" # Región válida para Free Tier
  zone    = "us-central1-a"
}

# 1. Regla de Firewall de GCP para permitir tráfico
resource "google_compute_firewall" "cms_firewall" {
  name    = "allow-cms-traffic"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["22", "80", "443", "1337"]
  }

  # ATENCIÓN: Para mayor seguridad, reemplaza "0.0.0.0/0" con tu IP pública fija
  source_ranges = ["0.0.0.0/0"] 
  target_tags   = ["cms-server"]
}

# 2. Instancia de Compute Engine (Free Tier)
resource "google_compute_instance" "cms_vm" {
  name         = "gcp-cms-production-vm"
  machine_type = "e2-micro" # MÁQUINA GRATUITA DE GCP
  zone         = "us-central1-a"
  tags         = ["cms-server"]

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2204-lts"
      size  = 30 # Hasta 30 GB standard están incluidos en el Free Tier
      type  = "pd-standard"
    }
  }

  network_interface {
    network = "default"
    access_config {
      # Al incluir esto, GCP le asigna una IP pública efímera
    }
  }

  # Script de inicio nativo de GCP para preparar el entorno
  metadata_startup_script = <<-EOF
    #!/bin/bash
    # 1. Configurar SWAP de 2GB (CRÍTICO para compilar apps Node.js en e2-micro)
    fallocate -l 2G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab

    # 2. Instalar Docker y Docker Compose
    apt-get update
    apt-get install -y apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL [https://download.docker.com/linux/ubuntu/gpg](https://download.docker.com/linux/ubuntu/gpg) | apt-key add -
    add-apt-repository "deb [arch=amd64] [https://download.docker.com/linux/ubuntu](https://download.docker.com/linux/ubuntu) $(lsb_release -cs) stable"
    apt-get update
    apt-get install -y docker-ce docker-compose
    usermod -aG docker ubuntu
  EOF
}

# 3. Mostrar la IP pública al terminar
output "cms_public_ip" {
  value       = google_compute_instance.cms_vm.network_interface.0.access_config.0.nat_ip
  description = "La IP pública asignada por GCP a tu servidor CMS"
}
```

## Paso 3: Desplegar la Infraestructura en GCP

En tu terminal, dentro del directorio donde creaste los archivos, ejecuta:

```bash
# Inicializar Terraform (descarga el proveedor oficial de Google)
terraform init

# Ver los recursos que se van a crear en GCP
terraform plan

# Desplegar en la nube (escribe 'yes' cuando te pregunte)
terraform apply
```

Al finalizar, la consola te devolverá la IP pública de tu nueva máquina aprovisionada por Google (ej: `Outputs: cms_public_ip = "34.123.45.67"`).

## Paso 4: Desplegar el Backend CMS (Caso de uso: Strapi)

Ahora que GCP te ha provisto un servidor listo y optimizado, vamos a desplegar la aplicación mediante contenedores.

1. **Conéctate por SSH** usando la CLI de Google Cloud:

   ```bash
   gcloud compute ssh ubuntu@gcp-cms-production-vm --zone=us-central1-a
   ```

2. Crea una carpeta para tu proyecto y un archivo `docker-compose.yml`:

   ```bash
   mkdir mi-cms && cd mi-cms
   nano docker-compose.yml
   ```

3. Pega la siguiente configuración para levantar el CMS y su base de datos:

   ```yaml
   version: '3'
   services:
     cms:
       image: strapi/strapi
       container_name: backend-cms
       restart: unless-stopped
       env_file: .env
       environment:
         DATABASE_CLIENT: postgres
         DATABASE_HOST: postgres
         DATABASE_PORT: 5432
         DATABASE_NAME: cms_db
         DATABASE_USERNAME: cms_user
         DATABASE_PASSWORD: CAMBIA_ESTA_PASSWORD_EN_PRODUCCION
         NODE_ENV: production
       ports:
         - "1337:1337"
       depends_on:
         - postgres
       volumes:
         - ./app:/srv/app
   
     postgres:
       image: postgres:14-alpine
       container_name: postgres
       restart: unless-stopped
       environment:
         POSTGRES_USER: cms_user
         POSTGRES_PASSWORD: CAMBIA_ESTA_PASSWORD_EN_PRODUCCION
         POSTGRES_DB: cms_db
       volumes:
         - cms-data:/var/lib/postgresql/data
   
   volumes:
     cms-data:
   ```

4. Crea tu archivo `.env` para las variables de entorno:

   ```bash
   nano .env
   ```

   Agrega (debes generar cadenas largas y aleatorias para producción):

   ```env
   HOST=0.0.0.0
   PORT=1337
   APP_KEYS=generar_llave_segura_1,generar_llave_segura_2
   API_TOKEN_SALT=generar_salt_seguro
   ADMIN_JWT_SECRET=generar_jwt_admin_seguro
   TRANSFER_TOKEN_SALT=generar_transfer_salt_seguro
   JWT_SECRET=generar_jwt_seguro
   ```

5. **Inicia los contenedores:**

   ```bash
   sudo docker-compose up -d
   ```

## 🔒 Instrucciones de Seguridad para Producción

Este es un entorno básico. Antes de utilizarlo en un entorno de producción real, **debes** aplicar las siguientes medidas de seguridad en tu infraestructura de GCP:

1. **Restringe el Firewall de GCP:** En el archivo `main.tf`, la regla `google_compute_firewall` tiene `source_ranges = ["0.0.0.0/0"]`. Esto abre el puerto SSH (22) y el de la aplicación a todo internet. **Modifica esto** para incluir únicamente la IP pública de tu oficina/casa, o utiliza [IAP (Identity-Aware Proxy)](https://cloud.google.com/iap) de Google para conectarte por SSH sin exponer el puerto 22.

2. **Cifra las Comunicaciones (HTTPS):** Actualmente el tráfico viaja en texto plano (HTTP). Debes configurar un Proxy Inverso (como Nginx, Caddy o Traefik) delante de tu contenedor del CMS y configurar un certificado SSL gratuito mediante Let's Encrypt.

3. **Gestión de Secretos:** Reemplaza inmediatamente los valores temporales en el `docker-compose.yml` (`CAMBIA_ESTA_PASSWORD_EN_PRODUCCION`) y en el archivo `.env` por contraseñas criptográficamente seguras. Para un nivel empresarial, considera usar [Google Cloud Secret Manager](https://cloud.google.com/secret-manager).

## 🎉 ¡Listo!

Abre tu navegador y comprueba el rendimiento de tu infraestructura en GCP accediendo a:
`http://<TU_IP_PUBLICA>:1337/admin`

### Limpieza de Recursos en GCP

La ventaja de usar Terraform con GCP es la facilidad para destruir recursos y evitar cobros sorpresa. Ejecuta en tu terminal local:

```bash
terraform destroy
```