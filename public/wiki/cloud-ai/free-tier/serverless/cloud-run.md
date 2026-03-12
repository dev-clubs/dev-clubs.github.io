---
title: Bot de Whatsapp @ Cloud Run
---
# Quickstart

## Paso 1: Configuración en Meta
1. Ve a Meta for Developers y crea una App tipo "Negocios".
2. Añade el producto WhatsApp a tu App.
3. En la sección API Setup, Meta te dará un Número de prueba, un Phone Number ID y un Temporary Access Token.
4. Inventa un Verify Token (una contraseña tuya, ej: `mi_super_token_123`).

## Paso 2: El Código (Node.js)
Crea una carpeta para tu proyecto, abre la terminal y ejecuta: 
`npm init -y && npm install express axios`

Crea un archivo `index.js` y pega el siguiente código:

```js
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// Variables de entorno
const { VERIFY_TOKEN, WHATSAPP_TOKEN, PHONE_NUMBER_ID } = process.env;

// 1. Verificación del Webhook (Requisito de Meta)
app.get('/webhook', (req, res) => {
    if (req.query['hub.verify_token'] === VERIFY_TOKEN) {
    res.send(req.query['hub.challenge']);
    } else {
    res.sendStatus(400);
    }
});

// 2. Recibir mensajes y responder
app.post('/webhook', async (req, res) => {
    const body = req.body;

    if (body.object && body.entry?.[0]?.changes?.[0]?.value?.messages?.[0]) {
    const msg = body.entry[0].changes[0].value.messages[0];
    
    if (msg.text && msg.text.body.toLowerCase() === 'ping') {
        try {
        await axios.post(
            `https://graph.facebook.com/v17.0/${PHONE_NUMBER_ID}/messages`,
            {
            messaging_product: "whatsapp",
            to: msg.from,
            text: { body: "pong 🏓" }
            },
            { headers: { Authorization: `Bearer ${WHATSAPP_TOKEN}` } }
        );
        } catch (error) {
        console.error("Error de Meta:", error.message);
        }
    }
    }
    res.sendStatus(200); 
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Webhook en puerto ${PORT}`));
```
## Paso 3: Dockerizar (Para Cloud Run)
Crea un archivo llamado `Dockerfile` en la misma carpeta:

    FROM node:18-alpine
    WORKDIR /app
    COPY package*.json ./
    RUN npm install --omit=dev
    COPY . .
    CMD ["node", "index.js"]

## Paso 4: Despliegue en GCP (Free Tier Blindado)
Con el Google Cloud CLI instalado y autenticado, ejecuta este comando (reemplaza las variables con tus datos reales):

    gcloud run deploy wa-ping-pong \
      --source . \
      --region us-central1 \
      --allow-unauthenticated \
      --max-instances 1 \
      --memory 256Mi \
      --set-env-vars="VERIFY_TOKEN=tu_token,WHATSAPP_TOKEN=tu_token_meta,PHONE_NUMBER_ID=tu_phone_id"

La terminal te devolverá una Service URL al terminar.

## Paso 5: Conectar todo en Meta
1. Ve a Meta for Developers > WhatsApp > Configuration.
2. Haz clic en Edit en la sección de Webhook.
3. En Callback URL, pega tu Service URL de Cloud Run y añádele `/webhook` al final.
4. En Verify Token, pon el token que inventaste en el Paso 1. Verifica y guarda.
5. En la misma pantalla, suscríbete al evento "messages".

¡Listo! Envía "ping" al número de prueba de Meta desde tu celular y el bot responderá "pong 🏓".