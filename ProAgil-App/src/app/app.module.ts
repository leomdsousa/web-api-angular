import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { EventosComponent } from './Eventos/Eventos.component';
import { NavComponent } from './nav/nav.component';

import { EventoService } from './_service/Evento.service';

import { DateFormatFormatPipePipe } from './_helps/DateFormatFormatPipe.pipe';
// Datepicker module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
   declarations: [
      AppComponent,
      EventosComponent,
      NavComponent,
      DateFormatFormatPipePipe
   ],
   imports: [
      BrowserModule,
      BsDatepickerModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ModalModule.forRoot(),
      TooltipModule.forRoot(),
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule,
      ReactiveFormsModule
   ],
   providers: [
      EventoService
],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
