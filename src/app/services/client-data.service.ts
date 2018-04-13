import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Client } from "../models/client";
import { DataService } from "./data.service";

@Injectable()
export class ClientDataService {
  constructor(private api: DataService) {}

  // Simulate POST /clients
  addClient(client: Client): Observable<Client> {
    return this.api.createClient(client);
  }

  // Simulate DELETE /clients/:id
  deleteClientById(clientId: number): Observable<Client> {
    return this.api.deleteClientById(clientId);
  }

  // Simulate PUT /clients/:id
  updateClient(client: Client): Observable<Client> {
    return this.api.updateClient(client);
  }

  // Simulate GET /clients
  getAllClients(): Observable<Client[]> {
    return this.api.getAllClients();
  }

  // Simulate GET /clients/:id
  getClientById(clientId: number): Observable<Client> {
    return this.api.getClientById(clientId);
  }
}
