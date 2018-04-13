import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { environment } from "environments/environment";
import { Client, Controller, Action } from "../models";

const API_URL = environment.apiUrl;

@Injectable()
export class DataService {
  constructor(private http: Http) {}

  // #region clients
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
        return Client.fromData(newClient);
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
  // #endregion

  // #region controller
  // API: GET /controllers
  public getAllControllers(): Observable<Controller[]> {
    return this.http
      .get(`${API_URL}/controllers`)
      .map(response => {
        const controllers = response.json();
        return controllers.map(controller => controller.fromData(controller));
      })
      .catch(this.handleError);
  }

  // API: POST /controllers
  public createController(controller: Controller): Observable<Controller> {
    return this.http
      .post(`${API_URL}/controllers`, controller)
      .map(response => {
        const newcontroller = response.json();
        return Controller.fromData(newcontroller);
      })
      .catch(this.handleError);
  }

  // API: GET /controllers/:id
  public getControllerById(controllerId: number): Observable<Controller> {
    return this.http
      .get(`${API_URL}/controllers/${controllerId}`)
      .map(response => {
        const controller = response.json();
        return { ...controller };
      })
      .catch(this.handleError);
  }

  // API: PUT /controllers/:id
  public updateController(controller: Controller): Observable<Controller> {
    return this.http
      .put(`${API_URL}/controllers/${controller.id}`, controller)
      .map(response => {
        const newcontroller = response.json();
        return { ...newcontroller };
      })
      .catch(this.handleError);
  }

  // DELETE /controllers/:id
  public deleteControllerById(controllerId: number): Observable<null> {
    return this.http
      .delete(`${API_URL}/controllers/${controllerId}`)
      .map(response => null)
      .catch(this.handleError);
  }
  // #endregion


  // #region action
  // API: GET /actions
  public getAllActions(): Observable<Action[]> {
    return this.http
      .get(`${API_URL}/actions`)
      .map(response => {
        const actions = response.json();
        return actions.map(action => Action.fromData(action));
      })
      .catch(this.handleError);
  }

  // API: POST /actions
  public createAction(action: Action): Observable<Action> {
    return this.http
      .post(`${API_URL}/actions`, action)
      .map(response => {
        const newaction = response.json();
        return Action.fromData(newaction);
      })
      .catch(this.handleError);
  }

  // API: GET /actions/:id
  public getActionById(actionId: number): Observable<Action> {
    return this.http
      .get(`${API_URL}/actions/${actionId}`)
      .map(response => {
        const action = response.json();
        return { ...action };
      })
      .catch(this.handleError);
  }

  // API: PUT /actions/:id
  public updateAction(action: Action): Observable<Action> {
    return this.http
      .put(`${API_URL}/actions/${action.id}`, action)
      .map(response => {
        const newaction = response.json();
        return { ...newaction };
      })
      .catch(this.handleError);
  }

  // DELETE /actions/:id
  public deleteActionById(actionId: number): Observable<null> {
    return this.http
      .delete(`${API_URL}/actions/${actionId}`)
      .map(response => null)
      .catch(this.handleError);
  }
  // #endregion
}
