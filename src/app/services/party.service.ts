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
  
  // Guardamos los eventos en memoria para que se actualicen al crear nuevos
  private servicesSubject = new BehaviorSubject<Service[]>([]);
  services$ = this.servicesSubject.asObservable();

  constructor() {
    this.loadInitialData();
  }

  // Carga los eventos del archivo JSON al iniciar
  private loadInitialData() {
    this.http.get<Service[]>(this.apiUrl).subscribe(data => {
      this.servicesSubject.next(data);
    });
  }

  // Devuelve todos los eventos (CRUD: Get All)
  getAll(): Observable<Service[]> {
    return this.services$;
  }

  // Busca un evento por su ID (CRUD: Get One)
  getOne(id: number): Observable<Service | undefined> {
    return this.services$.pipe(
      map((services: Service[]) => services.find((s: Service) => s.id === id))
    );
  }

  // Añade un nuevo evento a la lista local (CRUD: Create)
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
