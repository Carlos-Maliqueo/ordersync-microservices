# OrderSync Microservices

Sistema de gestión de órdenes con arquitectura de microservicios.

## 🚀 Tecnologías

* Node.js + Express + TypeScript
* .NET (ASP.NET Core)
* JWT Authentication
* REST APIs
* Webhooks

## 🧩 Arquitectura

* API principal (Node.js)
* Microservicio de pagos (.NET)
* Comunicación síncrona (HTTP)
* Comunicación asíncrona (Webhooks)

## 🔄 Flujo

1. Usuario se autentica (JWT)
2. Crea una orden
3. Node envía la orden al servicio de pagos (.NET)
4. .NET procesa el pago
5. .NET notifica a Node vía webhook
6. Node actualiza el estado de la orden

## 🧪 Cómo ejecutar

### API Node

```bash
cd ordersync-api
npm install
npm run dev
```

### Payment Service (.NET)

```bash
cd ordersync-payment
dotnet run
```

## 📌 Endpoints principales

* POST /auth/register
* POST /auth/login
* POST /orders
* POST /webhook/payment

## 💡 Objetivo

Proyecto enfocado en demostrar integración entre microservicios, manejo de autenticación y comunicación entre servicios.

---
