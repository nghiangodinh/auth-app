import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { PageTitleService } from "../../core/page-title/page-title.service";
import { fadeInAnimation } from "../../core/route-animation/route.animation";

const password = new FormControl("", Validators.required);
const confirmPassword = new FormControl("", CustomValidators.equalTo(password));

@Component({
  selector: "ms-client-create",
  templateUrl: "./client-create.component.html",
  styleUrls: ["./client-create.component.scss"],
  encapsulation: ViewEncapsulation.None,
  host: {
    "[@fadeInAnimation]": "true"
  },
  animations: [fadeInAnimation]
})
export class ClientCreateComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private pageTitleService: PageTitleService
  ) {}
  ngOnInit() {
    this.pageTitleService.setTitle("Add new Client");
    this.form = this.fb.group({
      name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ],
      allowedOrigin: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ]
    });
  }
}
