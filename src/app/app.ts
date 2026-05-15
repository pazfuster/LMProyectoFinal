import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  /**
   * Componente principal que actúa como contenedor de la aplicación.
   * Implementa router-outlet para la navegación entre vistas.
   */
  protected readonly title = signal('socialocal');
  private router = inject(Router);

  ngOnInit() {
    /**
     * Asegura que la página se desplace al inicio al cambiar de ruta,
     * mejorando la experiencia de usuario en transiciones.
     */
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
