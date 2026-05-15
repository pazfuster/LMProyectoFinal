import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PartyService } from '../../../services/party.service';
import { Service } from '../../../models/service.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  /**
   * Recibe el ID del servicio desde la ruta gracias a withComponentInputBinding().
   */
  @Input() id!: string;

  /**
   * Inyección del servicio de peticiones HTTP.
   */
  private partyService = inject(PartyService);

  /**
   * Objeto para almacenar la información de los detalles.
   */
  service: Service | undefined;

  /**
   * Gestión de la suscripción.
   */
  private subscription: Subscription | undefined;

  /**
   * Hook de ciclo de vida: Se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    if (this.id) {
      this.loadServiceDetail(Number(this.id));
    }
  }

  /**
   * Método para llamar a la API y obtener los detalles de un elemento específico.
   * @param id Identificador del servicio.
   */
  loadServiceDetail(id: number): void {
    this.subscription = this.partyService.getOne(id).subscribe({
      next: (data) => {
        this.service = data;
        console.log('Detalle del servicio cargado:', data);
      },
      error: (err) => {
        console.error('Error al cargar el detalle del servicio:', err);
      }
    });
  }

  /**
   * Limpieza de suscripciones.
   */
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
