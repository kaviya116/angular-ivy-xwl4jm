import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './task/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AppRoutingModule } from './app.routing.module';
import { TryService } from './try.service';
import { HomeComponent } from './task/home/home.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule , AppRoutingModule],
  declarations: [ AppComponent, HelloComponent,RegisterComponent,HomeComponent],
  bootstrap:    [ AppComponent ],
  providers:    [TryService]
  
})
export class AppModule { }
