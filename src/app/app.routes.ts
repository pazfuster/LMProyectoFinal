import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { DetailComponent } from './components/pages/detail/detail.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CreateEventComponent } from './components/pages/create-event/create-event.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

// Definición de las páginas y sus rutas
export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página de inicio
  { path: 'servicios', component: CatalogComponent }, // Listado de eventos
  { path: 'servicios/nuevo', component: CreateEventComponent }, // Formulario de creación
  { path: 'nosotros', component: AboutComponent }, // Información sobre la agencia
  { path: 'contacto', component: ContactComponent }, // Formulario de contacto
  { path: 'servicios/:id', component: DetailComponent }, // Detalle de un evento específico
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' } // Si la ruta no existe, vamos a 404
];
