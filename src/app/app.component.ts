import { Component, Optional, ViewEncapsulation, OnInit } from '@angular/core';
import { TranslateService } from "ng2-translate/ng2-translate";
import {
  MdDialog,
  MdDialogConfig,
  MdDialogRef,
  MdSnackBar
} from "@angular/material";

import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDyJPcdwJabxD7Erwe5nnnlv1BpomgS6EU",
  authDomain: "cardbey-95b90.firebaseapp.com",
  databaseURL: "https://cardbey-95b90.firebaseio.com",
  projectId: "cardbey-95b90",
  storageBucket: "cardbey-95b90.appspot.com",
  messagingSenderId: "1063949230997"
};


@Component({
  selector: "gene-app",
  template: "<router-outlet></router-outlet>",
  encapsulation: ViewEncapsulation.None
})
export class GeneAppComponent implements OnInit {
  constructor(translate: TranslateService) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang("en");

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : "en");
  }

  ngOnInit() {
    firebase.initializeApp(config);
  }
}
