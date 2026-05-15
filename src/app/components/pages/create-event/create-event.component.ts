import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PartyService } from '../../../services/party.service';
import { Service } from '../../../models/service.interface';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
  private partyService = inject(PartyService);
  private router = inject(Router);

  /**
   * Objeto para almacenar los datos del nuevo evento.
   */
  newEvent: Omit<Service, 'id'> = {
    name: '',
    description: '',
    longDescription: '',
    price: 0,
    currency: '€',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000',
    category: 'Premium',
    duration: '',
    includes: []
  };

  /**
   * Texto para manejar los elementos incluidos (separados por comas).
   */
  includesText: string = '';

  onSubmit() {
    // Procesar los elementos incluidos
    this.newEvent.includes = this.includesText.split(',').map(item => item.trim()).filter(item => item !== '');

    // Llamar al servicio para crear el evento
    this.partyService.create(this.newEvent).subscribe({
      next: (created) => {
        console.log('Evento creado:', created);
        alert('¡Evento creado con éxito! Volviendo al catálogo.');
        this.router.navigate(['/servicios']);
      },
      error: (err) => {
        console.error('Error al crear evento:', err);
        alert('Hubo un error al crear el evento.');
      }
    });
  }
}
