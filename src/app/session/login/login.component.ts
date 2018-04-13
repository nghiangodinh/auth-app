import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "ms-login-session",
  templateUrl: "./login-component.html",
  styleUrls: ["./login-component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) {
    this.email = "admin@caterwin.com";
    this.password = "caterwin";
  }

  login() {
    // TODO: remove this to use real REST api
    this.authService.signinUser(this.email, this.password);
  }
}
