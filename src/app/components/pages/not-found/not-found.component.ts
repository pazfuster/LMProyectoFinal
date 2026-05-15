import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="vh-100 d-flex align-items-center justify-content-center bg-black text-white text-center p-5">
      <div>
        <h1 class="display-1 fw-bold tracking-tighter">404</h1>
        <p class="lead text-secondary mb-5">LO SENTIMOS, LA PÁGINA QUE BUSCAS NO EXISTE O HA SIDO MOVIDA.</p>
        <a routerLink="/" class="btn btn-outline-primary btn-lg rounded-0 px-5 py-3">VOLVER AL INICIO</a>
      </div>
    </div>
  `,
  styles: [`
    .tracking-tighter { letter-spacing: -5px; font-size: 10rem; }
  `]
})
export class NotFoundComponent {
  /**
   * Componente para rutas no encontradas (Página 404).
   */
}
