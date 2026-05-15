import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { DetailComponent } from './components/pages/detail/detail.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CreateEventComponent } from './components/pages/create-event/create-event.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

/**
 * Configuración de rutas de la aplicación.
 * Implementa rutas genéricas, parametrizadas y redirecciones.
 */
export const routes: Routes = [
  // Ruta por defecto (Default route)
  { path: '', component: HomeComponent },
  
  // Rutas para componentes genéricos
  { path: 'servicios', component: CatalogComponent },
  { path: 'servicios/nuevo', component: CreateEventComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  
  // Ruta con parámetros (ej. componentes/:parametro)
  { path: 'servicios/:id', component: DetailComponent },
  
  // Ruta de redirección (Redirect route)
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  
  // Ruta 404 para rutas no encontradas
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];
