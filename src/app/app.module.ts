import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakComponent } from './pages/keycloak/keycloak.component';
import { DetailsComponent } from './pages/details/details.component';
import { initializeKeycloak } from './keycloak/app.init';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';
import { DynamicForm2Component } from './pages/dynamic-form-2/dynamic-form-2.component';
import { DynamicForm3Component } from './pages/dynamic-form-3/dynamic-form-3.component';
import { DynamicForm4Component } from './pages/dynamic-form-4/dynamic-form-4.component';
import { FormControlComponent } from './pages/form-control/form-control.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    KeycloakComponent,
    DetailsComponent,
    DashboardComponent,
    DynamicFormComponent,
    DynamicForm2Component,
    DynamicForm3Component,
    DynamicForm4Component,
    FormControlComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
