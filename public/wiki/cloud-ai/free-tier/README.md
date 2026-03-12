---
course_name: Como usar Google Cloud sin costo
---

# Características del Free Tier de Google Cloud (Siempre Gratuito)

Estos son los límites mensuales de los servicios más utilizados de GCP que no caducan (Always Free), ideales para mantener proyectos personales o startups en etapa inicial sin costo.

## 1. Compute Engine (Máquina Virtual)
* **1 instancia `e2-micro`** al mes (sin interrupciones).
* **Condición estricta:** Solo válida en las regiones `us-west1` (Oregón), `us-central1` (Iowa) o `us-east1` (Carolina del Sur).
* **Almacenamiento:** 30 GB de disco persistente estándar (HDD).
* **Red:** 1 GB de salida de red al mes (hacia Norteamérica).

## 2. Cloud Run (Contenedores Serverless)
* **2 millones de solicitudes** al mes.
* **Memoria:** 360,000 GB-segundos al mes.
* **Cómputo:** 180,000 vCPU-segundos al mes.
* **Red:** 1 GB de salida de red al mes (hacia Norteamérica).

## 3. Cloud Functions (Funciones Serverless)
* **2 millones de invocaciones** al mes (incluyendo invocaciones en segundo plano y HTTP).
* **Memoria/Cómputo:** 400,000 GB-segundos y 200,000 GHz-segundos de tiempo de procesamiento.
* **Red:** 5 GB de salida de red al mes.

## 4. Cloud Storage (Almacenamiento de Archivos)
* **5 GB de almacenamiento** regional (solo en las regiones `us-west1`, `us-central1` o `us-east1`).
* **Operaciones:** 5,000 operaciones de Clase A (ej. crear/actualizar archivos) y 50,000 operaciones de Clase B (ej. leer archivos) al mes.
* **Red:** 1 GB de salida de red al mes.

## 5. Firestore / Firebase (Base de Datos NoSQL)
* **Almacenamiento:** 1 GB de datos.
* **Operaciones (por día):** 50,000 lecturas, 20,000 escrituras y 20,000 eliminaciones diarias.
* *Nota:* Excelente para bases de datos de aplicaciones móviles o webs que no requieren consultas masivas constantes.

## 6. App Engine (Alojamiento Web)
* **28 horas de instancia `F1`** al día (entorno estándar). Suficiente para correr una aplicación web 24/7 sin interrupciones.
* **Almacenamiento:** 5 GB de Cloud Storage.
* **Red:** 1 GB de salida de red al día.

## 7. BigQuery (Data Warehouse / Analítica)
* **Consultas:** 1 TB de procesamiento de consultas al mes.
* **Almacenamiento:** 10 GB de almacenamiento de datos.

---
**Regla de oro:** Aunque estos servicios sean gratuitos, es fundamental configurar Alertas de Presupuesto (Billing Alerts) en GCP para que te notifiquen por correo si tu gasto estimado supera los $0.10. La mayoría de los cobros accidentales ocurren por superar la cuota de "salida de red" (Network Egress).

¿Te gustaría que revisemos cómo configurar la alerta de presupuesto paso a paso para evitar sorpresas a fin de mes?