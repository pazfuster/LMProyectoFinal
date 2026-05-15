import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { DetailComponent } from './components/pages/detail/detail.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

/**
 * Configuración de rutas de la aplicación.
 * Implementa rutas genéricas, parametrizadas y redirecciones.
 */
export const routes: Routes = [
  // Ruta por defecto (Default route)
  { path: '', component: HomeComponent },
  
  // Ruta para el catálogo (Componente genérico)
  { path: 'servicios', component: CatalogComponent },
  
  // Ruta con parámetros (ej. componentes/:parametro)
  { path: 'servicios/:id', component: DetailComponent },
  
  // Ruta de redirección (Redirect route)
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  
  // Ruta 404 para rutas no encontradas
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];
