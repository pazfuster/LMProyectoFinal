import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, BehaviorSubject, tap, take } from 'rxjs';
import { Service } from '../models/service.interface';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private http: HttpClient = inject(HttpClient);
  private apiUrl: string = 'data/services.json';
  
  /**
   * Estado local de los servicios para permitir "creación" en memoria.
   */
  private servicesSubject = new BehaviorSubject<Service[]>([]);
  services$ = this.servicesSubject.asObservable();

  constructor() {
    // Inicializamos la lista de servicios desde el JSON
    this.loadInitialData();
  }

  private loadInitialData() {
    this.http.get<Service[]>(this.apiUrl).subscribe(data => {
      this.servicesSubject.next(data);
    });
  }

  /**
   * Obtiene todos los servicios disponibles (CRUD: GetAll).
   */
  getAll(): Observable<Service[]> {
    return this.services$;
  }

  /**
   * Obtiene un servicio específico por su ID (CRUD: GetOne).
   */
  getOne(id: number): Observable<Service | undefined> {
    return this.services$.pipe(
      map((services: Service[]) => services.find((s: Service) => s.id === id))
    );
  }

  /**
   * Añade un nuevo servicio a la lista (Simulación CRUD: Create).
   */
  create(newService: Omit<Service, 'id'>): Observable<Service> {
    return this.services$.pipe(
      take(1),
      map(services => {
        const id = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
        const serviceWithId = { ...newService, id };
        this.servicesSubject.next([...services, serviceWithId]);
        return serviceWithId;
      })
    );
  }
}
