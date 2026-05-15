import { Component, OnInit, Input, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
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
export class DetailComponent implements OnInit, OnDestroy {
  @Input() id!: string; // Recibe el ID desde la URL automaticamente
  private partyService = inject(PartyService);
  private router = inject(Router);
  service: Service | undefined; // Datos del evento seleccionado
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    if (this.id) this.loadServiceDetail(Number(this.id));
  }

  // Carga la info del evento usando el ID
  loadServiceDetail(id: number): void {
    this.subscription = this.partyService.getOne(id).subscribe({
      next: (data) => this.service = data,
      error: (err) => console.error('Error:', err)
    });
  }

  // Al reservar, vamos al contacto y pasamos el nombre del evento
  onReserve() {
    if (this.service) {
      this.router.navigate(['/contacto'], { 
        queryParams: { evento: this.service.name } 
      });
    }
  }

  // Cerramos suscripción para no gastar memoria
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
