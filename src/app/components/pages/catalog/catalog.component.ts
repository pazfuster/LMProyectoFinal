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
  private partyService = inject(PartyService); // Inyectamos el servicio de datos
  services: Service[] = []; // Aquí guardaremos los eventos
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.loadServices(); // Cargamos los datos al iniciar
  }

  // Llama al servicio para traer todos los eventos
  loadServices(): void {
    this.subscription = this.partyService.getAll().subscribe({
      next: (data) => this.services = data,
      error: (err) => console.error('Error:', err)
    });
  }

  // Cerramos la suscripción al salir para ahorrar memoria
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
