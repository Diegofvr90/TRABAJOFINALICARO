import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from "./pages/registro/registro.component"
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { MemorandosComponent } from './pages/memorandos/memorandos.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { RecibidosComponent } from './memorandos/recibidos/recibidos.component';
import { EnviadosComponent } from './memorandos/enviados/enviados.component';
import { NuevoMensajeComponent } from './memorandos/nuevo-mensaje/nuevo-mensaje.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HeaderComponent,
    MemorandosComponent,
    HomeComponent,
    RecibidosComponent,
    EnviadosComponent,
    NuevoMensajeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    CommonModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
