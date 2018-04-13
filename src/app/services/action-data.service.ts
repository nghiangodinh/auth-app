import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Action } from "../models/Action";
import { DataService } from "./data.service";

@Injectable()
export class ActionDataService {
  constructor(private api: DataService) {}

  // Simulate POST /actions
  addAction(action: Action): Observable<Action> {
    return this.api.createAction(action);
  }

  // Simulate DELETE /actions/:id
  deleteActionById(actionId: number): Observable<Action> {
    return this.api.deleteActionById(actionId);
  }

  // Simulate PUT /actions/:id
  updateAction(action: Action): Observable<Action> {
    return this.api.updateAction(action);
  }

  // Simulate GET /actions
  getAllActions(): Observable<Action[]> {
    return this.api.getAllActions();
  }

  // Simulate GET /actions/:id
  getActionById(actionId: number): Observable<Action> {
    return this.api.getActionById(actionId);
  }
}
