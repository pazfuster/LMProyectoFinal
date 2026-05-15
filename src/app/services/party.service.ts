import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Service } from '../models/service.interface';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  /**
   * Inyección del HttpClient para realizar peticiones asíncronas.
   */
  private http: HttpClient = inject(HttpClient);
  
  /**
   * URL de la API de servicios (archivo local).
   */
  private apiUrl: string = 'data/services.json';

  /**
   * Obtiene todos los servicios disponibles (CRUD: GetAll).
   */
  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl);
  }

  /**
   * Obtiene un servicio específico por su ID (CRUD: GetOne).
   */
  getOne(id: number): Observable<Service | undefined> {
    return this.getAll().pipe(
      map((services: Service[]) => services.find((s: Service) => s.id === id))
    );
  }
}
