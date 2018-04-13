import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: "ms-register-session",
  templateUrl: "./register-component.html",
  styleUrls: ["./register-component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;

  constructor(private router: Router, private authService: AuthService) {}

  register() {
    // TODO: remove this to use real REST api
    this.authService.signupUser(this.email, this.password);
  }
}
