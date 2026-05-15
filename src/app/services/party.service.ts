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
   * Se utiliza el patrón de inyección funcional de Angular 14+.
   */
  private http = inject(HttpClient);
  
  /**
   * URL de la API de servicios. 
   * En este caso, apunta a un archivo JSON local en la carpeta public.
   */
  private apiUrl = 'data/services.json';

  /**
   * Obtiene todos los servicios disponibles (CRUD: GetAll).
   * @returns Observable con la lista de servicios.
   */
  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl);
  }

  /**
   * Obtiene un servicio específico por su ID (CRUD: GetOne).
   * @param id Identificador único del servicio.
   * @returns Observable con el servicio encontrado o undefined.
   */
  getOne(id: number): Observable<Service | undefined> {
    return this.getAll().pipe(
      map(services => services.find(s => s.id === id))
    );
  }
}
