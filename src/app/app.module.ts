import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SymptomsComponent } from './symptoms/symptoms.component';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SymptomsComponent,
    DiagnosisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TypeaheadModule,
    BrowserAnimationsModule,
    ProgressbarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
