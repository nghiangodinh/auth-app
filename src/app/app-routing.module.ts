import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./main/main.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { LoginComponent } from "./session/login/login.component";
import { RegisterComponent } from "./session/register/register.component";
import { ForgotPasswordComponent } from "./session/forgot-password/forgot-password.component";
import { LockScreenComponent } from "./session/lockscreen/lockscreen.component";
import { ClientEditComponent } from "./clients/client-edit/client-edit.component";
import { ClientListComponent } from "./clients/client-list/client-list.component";
import { ClientCreateComponent } from "./clients/client-create/client-create.component";

import { AuthGuard } from "./auth/auth-guard.service";

const appRoutes: Routes = [
  {
    path: "session/login",
    component: LoginComponent
  },
  {
    path: "session/register",
    component: RegisterComponent
  },
  {
    path: "session/forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "session/lockscreen",
    component: LockScreenComponent
  },
  {
    path: "",
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "dashboard/dashboard", component: DashboardComponent },
      { path: "", component: DashboardComponent },
      {
        path: "clients",
        component: ClientListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "clients/:id/edit",
        component: ClientEditComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "clients/create",
        component: ClientCreateComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {}
