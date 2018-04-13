import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { environment } from "environments/environment";
import { Client } from "../models/client";

const API_URL = environment.apiUrl;

@Injectable()
export class DataService {
  constructor(private http: Http) {}

  // API: GET /clients
  public getAllClients(): Observable<Client[]> {
    return this.http
      .get(`${API_URL}/clients`)
      .map(response => {
        const clients = response.json();
        return clients.map(client => Client.fromData(client));
      })
      .catch(this.handleError);
  }

  // API: POST /Clients
  public createClient(client: Client): Observable<Client> {
    return this.http
      .post(`${API_URL}/clients`, client)
      .map(response => {
        const newClient = response.json();
        return Client.fromData(newClient)
      })
      .catch(this.handleError);
  }

  // API: GET /clients/:id
  public getClientById(clientId: number): Observable<Client> {
    return this.http
      .get(`${API_URL}/clients/${clientId}`)
      .map(response => {
        const client = response.json();
        return { ...client };
      })
      .catch(this.handleError);
  }

  // API: PUT /clients/:id
  public updateClient(client: Client): Observable<Client> {
    return this.http
      .put(`${API_URL}/clients/${client.id}`, client)
      .map(response => {
        const newClient = response.json();
        return { ...newClient };
      })
      .catch(this.handleError);
  }

  // DELETE /clients/:id
  public deleteClientById(clientId: number): Observable<null> {
    return this.http
      .delete(`${API_URL}/clients/${clientId}`)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error("DataService::handleError", error);
    return Observable.throw(error);
  }
}
