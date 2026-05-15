/**
 * Interfaz que define la estructura de un servicio de eventos.
 * Compatible con formatos JSON de APIs REST.
 */
export interface Service {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  imageUrl: string;
  category: string;
  duration?: string;
  includes?: string[];
}
