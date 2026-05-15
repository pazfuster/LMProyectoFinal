import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  private route = inject(ActivatedRoute); // Para leer datos de la URL

  // Información de contacto de la agencia
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

  message: string = ''; // Modelo para el mensaje del formulario

  ngOnInit() {
    // Si venimos de "Reservar", pre-rellenamos el mensaje con el nombre del evento
    this.route.queryParams.subscribe(params => {
      if (params['evento']) {
        this.message = `Hola, me gustaría reservar el evento: ${params['evento']}.`;
      }
    });
  }

  // Se ejecuta al enviar el formulario
  onSubmit() {
    alert('Gracias por contactar con SocialLocal. Nos pondremos en contacto contigo pronto.');
  }
}
