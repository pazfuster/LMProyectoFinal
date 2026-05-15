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

  // Objeto con los campos del formulario
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

  includesText: string = ''; // Para manejar los "incluye" como texto

  // Se ejecuta al dar clic en crear
  onSubmit() {
    // Convertimos el texto separado por comas en una lista (Array)
    this.newEvent.includes = this.includesText.split(',').map(item => item.trim()).filter(item => item !== '');

    // Enviamos el nuevo evento al servicio
    this.partyService.create(this.newEvent).subscribe({
      next: () => {
        alert('¡Evento creado!');
        this.router.navigate(['/servicios']); // Volvemos al catálogo
      },
      error: (err) => console.error('Error:', err)
    });
  }
}
