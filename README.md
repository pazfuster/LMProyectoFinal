# SocialLocal - Agencia de Servicios para Eventos

SocialLocal es una aplicación web moderna desarrollada con **Angular 21**, diseñada para la gestión de servicios de fiestas y eventos. La estética del proyecto está inspirada en agencias creativas de alto nivel como Basic Agency y Chaptr Studio, utilizando un diseño minimalista, tipografía audaz y componentes interactivos.

## Requisitos Previos

*   **Node.js**: Versión 18.x o superior.
*   **Angular CLI**: Versión 19.x o superior.

## Instalación

1. Clona el repositorio (o descarga los archivos).
2. Abre una terminal en la raíz del proyecto.
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

Para iniciar el servidor de desarrollo, ejecuta:
```bash
ng serve
```
La aplicación estará disponible en `http://localhost:4200/`.

## Características Implementadas

*   **Arquitectura Angular 19+**: Uso de componentes Standalone, inyección funcional e inputs de ruta.
*   **Diseño Premium**: Integración de Bootstrap 5 con estilos personalizados, Google Fonts (Outfit) y micro-animaciones.
*   **Enrutamiento Avanzado**: Rutas genéricas, parametrizadas, redirecciones y gestión de errores 404.
*   **Servicio CRUD**: Implementación de `PartyService` con `HttpClient` para obtener datos de forma asíncrona.
*   **Componentes Dinámicos**: Catálogo y Detalles con suscripciones reactivas y gestión de ciclo de vida.

## Estructura del Proyecto

*   `src/app/models`: Interfaces de TypeScript para la consistencia de datos.
*   `src/app/services`: Lógica de comunicación con la API (HttpClient).
*   `src/app/components/layout`: Componentes globales (Header, Footer).
*   `src/app/components/pages`: Vistas principales (Home, Catalog, Detail, 404).

---
Desarrollado por Antigravity.
