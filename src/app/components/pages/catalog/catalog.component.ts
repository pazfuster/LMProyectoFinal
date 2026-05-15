import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PartyService } from '../../../services/party.service';
import { Service } from '../../../models/service.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  /**
   * Inyección del servicio de peticiones HTTP.
   */
  private partyService = inject(PartyService);
  
  /**
   * Lista de servicios obtenida de la API.
   */
  services: Service[] = [];
  
  /**
   * Gestión de la suscripción para evitar fugas de memoria.
   */
  private subscription: Subscription | undefined;

  /**
   * Hook de ciclo de vida: Se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.loadServices();
  }

  /**
   * Método para llamar a la API y gestionar la respuesta.
   */
  loadServices(): void {
    this.subscription = this.partyService.getAll().subscribe({
      next: (data) => {
        this.services = data;
        console.log('Servicios cargados:', data);
      },
      error: (err) => {
        console.error('Error al cargar servicios:', err);
      }
    });
  }

  /**
   * Limpieza de suscripciones al destruir el componente.
   */
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
