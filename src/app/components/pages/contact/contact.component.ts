import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  /**
   * Componente de contacto.
   * Maneja el formulario y muestra la información de contacto inventada.
   */
  contactInfo = {
    email: 'hello@sociallocal.com',
    phone: '+34 912 345 678',
    address: 'Calle de la Innovación 42, 28004 Madrid, España',
    social: [
      { name: 'Instagram', url: '#' },
      { name: 'Twitter', url: '#' },
      { name: 'LinkedIn', url: '#' }
    ]
  };

  onSubmit() {
    alert('Gracias por contactar con SocialLocal. Nos pondremos en contacto contigo pronto.');
  }
}
