import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="py-5 bg-black text-white min-vh-100 d-flex align-items-center">
      <div class="container px-5">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-1 fw-bold tracking-tighter mb-5">SOBRE<br>NOSOTROS</h1>
            <p class="lead text-secondary mb-4">
              SocialLocal nació en 2024 con la misión de redefinir la producción de eventos locales con un enfoque global.
            </p>
            <p class="text-secondary mb-5">
              No somos solo planificadores; somos curadores de momentos. Cada proyecto es una oportunidad para 
              fusionar la estética brutalista con la calidez del servicio personalizado.
            </p>
          </div>
          <div class="col-lg-6">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000" class="img-fluid grayscale" alt="Team">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tracking-tighter { letter-spacing: -3px; }
    .grayscale { filter: grayscale(1); transition: filter 0.5s ease; }
    .grayscale:hover { filter: grayscale(0); }
  `]
})
export class AboutComponent {
  /**
   * Componente estático "Sobre Nosotros".
   */
}
