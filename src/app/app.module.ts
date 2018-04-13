import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpModule, Http } from "@angular/http";
import { CalendarModule } from "angular-calendar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "@angular/material";
import { RouterModule, Routes } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AgmCoreModule } from "@agm/core";
import { QuillModule } from "ngx-quill";
import { DragulaModule } from "ng2-dragula/ng2-dragula";
import { SortablejsModule, SortablejsOptions } from "angular-sortablejs";
import { FileUploadModule } from "ng2-file-upload/ng2-file-upload";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TreeModule } from "angular-tree-component";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { EasyPieChartModule } from "ng2modules-easypiechart";
import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface
} from "ngx-perfect-scrollbar";
import {
  TranslateModule,
  TranslateLoader,
  TranslateStaticLoader
} from "ng2-translate/ng2-translate";
import { CKEditorModule } from "ng2-ckeditor";
import { ColorPickerModule } from "ngx-color-picker";
import "hammerjs";

import { GeneAppComponent } from "./app.component";
import { RoutingModule } from "./app-routing.module";
import { MainComponent } from "./main/main.component";
import { MenuToggleModule } from "./core/menu/menu-toggle.module";
import { MenuItems } from "./core/menu/menu-items/menu-items";
import { BreadcrumbsComponent } from "./core/breadcrumb/breadcrumb.component";
import { BreadcrumbService } from "./core/breadcrumb/breadcrumb.service";
import { PageTitleService } from "./core/page-title/page-title.service";
import { D3ChartService } from "./core/nvD3/nvD3.service";
import { nvD3 } from "./core/nvD3/nvD3.component";

import { DashboardComponent } from "./dashboard/dashboard.component";

import { LoginComponent } from "./session/login/login.component";
import { RegisterComponent } from "./session/register/register.component";
import { ForgotPasswordComponent } from "./session/forgot-password/forgot-password.component";
import { LockScreenComponent } from "./session/lockscreen/lockscreen.component";

import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { ClientListComponent } from "./clients/client-list/client-list.component";
import { ClientEditComponent } from "./clients/client-edit/client-edit.component";
import { ClientCreateComponent } from "./clients/client-create/client-create.component";

import { DataService, ClientDataService } from "./services";


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, "assets/i18n", ".json");
}

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const sortablejsConfig: SortablejsOptions = {
  animation: 300
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk"
    }),
    QuillModule,
    CKEditorModule,
    DragulaModule,
    SortablejsModule,
    FileUploadModule,
    NgxDatatableModule,
    TreeModule,
    ChartsModule,
    EasyPieChartModule,
    ColorPickerModule,
    PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
    MenuToggleModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [Http]
    })
  ],
  declarations: [
    GeneAppComponent,
    MainComponent,
    DashboardComponent,

    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LockScreenComponent,

    BreadcrumbsComponent,
    nvD3,
    ClientListComponent,
    ClientEditComponent,
    ClientCreateComponent
  ],

  bootstrap: [GeneAppComponent],
  providers: [
    D3ChartService,
    MenuItems,
    BreadcrumbService,
    PageTitleService,
    AuthService,
    AuthGuard,
    ClientDataService,
    DataService
  ]
})
export class GeneAppModule {}
