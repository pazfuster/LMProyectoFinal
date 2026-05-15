import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

// Configuración global de la aplicación Angular
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Manejo de errores globales
    provideRouter(routes, withComponentInputBinding()), // Configura rutas y permite leer parámetros fácilmente
    provideHttpClient(), // Habilita el servicio para hacer peticiones HTTP (API)
  ],
};
