npm create vite@latest
cd nombre-del-proyecto
npm install
npm install -D tailwindcss postcss autoprefixer
npm install -D @tailwindcss/vite

Abre vite.config.js y modifícalo así:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

En src/index.css
Reemplaza todo por:
@import "tailwindcss";

components/
  WhatsAppButton.jsx
  ServiceItem.jsx

sections/
  Hero.jsx
  Services.jsx
  Trust.jsx
  FinalCTA.jsx
  Footer.jsx

business = {
  brand: {
    name: "",
    city: ""
  },

  contact: {
    phone: "",
    trackingMessage: "",
  },

  hero: {
    title: "",
    subtitle: ""
  },

  services: [
    {
      id: 1,
      title: "",
      description: ""
    }
  ],

  trustPoints: [
    {
      id: 1,
      title: "",
      description: ""
    }
  ]
}

Title (más corto y fuerte):
Traslados desde Tula a cualquier destino.
Subtitle:
Viajes locales, foráneos y aeropuertos. Reserva por WhatsApp.

service:“Traslados rápidos y seguros dentro de Tula de Allende.”

TrustPoint:“Emitimos factura para viajes personales o empresariales.”

Estructura conceptual:
<App>
  <Hero />
  <Services />
  <Trust />
  <FinalCTA />
  <Footer />
  <WhatsAppButton floating />
</App>

Diseño de props:
Ejemplo conceptual:
Hero necesita:
title
subtitle
phone
trackingMessage.viajarAhora
Services necesita:
services[]
Trust necesita:
trustPoints[]
FinalCTA necesita:
phone
trackingMessage.viajarAhora
Eso es diseño de contratos entre componentes.

1️⃣ Traslados Locales
Título:
Traslados Locales
Mensaje:
Servicio dentro de Tula de Allende y municipios cercanos, ideal para traslados diarios y compromisos importantes.
Ahora:
Suena profesional.
Es específico.
No es informal.
2️⃣ Viajes Foráneos
Aquí debes ser honesto.
Si principalmente hacen CDMX y estados cercanos, dilo.
Título:
Viajes Foráneos
Mensaje:
Traslados programados a Ciudad de México y otras ciudades, con servicio puntual y organizado.
Eso suena realista y profesional.
3️⃣ Aeropuerto y Ejecutivos
No lo dejes ambiguo.
Título:
Aeropuerto y Ejecutivos
Mensaje:
Traslados a AIFA, CDMX y compromisos empresariales con atención puntual y directa.
