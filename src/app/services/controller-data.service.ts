import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Controller } from "../models/controller";
import { DataService } from "./data.service";

@Injectable()
export class ControllerDataService {
  constructor(private api: DataService) {}

  // Simulate POST /controllers
  addController(Controller: Controller): Observable<Controller> {
    return this.api.createController(Controller);
  }

  // Simulate DELETE /controllers/:id
  deleteControllerById(ControllerId: number): Observable<Controller> {
    return this.api.deleteControllerById(ControllerId);
  }

  // Simulate PUT /controllers/:id
  updateController(Controller: Controller): Observable<Controller> {
    return this.api.updateController(Controller);
  }

  // Simulate GET /controllers
  getAllControllers(): Observable<Controller[]> {
    return this.api.getAllControllers();
  }

  // Simulate GET /controllers/:id
  getControllerById(ControllerId: number): Observable<Controller> {
    return this.api.getControllerById(ControllerId);
  }
}
