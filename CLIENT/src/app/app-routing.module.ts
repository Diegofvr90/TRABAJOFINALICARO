import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemorandosComponent } from './pages/memorandos/memorandos.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from "./pages/registro/registro.component";
import { RecibidosComponent } from './memorandos/recibidos/recibidos.component';
import { EnviadosComponent } from './memorandos/enviados/enviados.component';
import { NuevoMensajeComponent } from './memorandos/nuevo-mensaje/nuevo-mensaje.component';

const routes: Routes = [
  {path: "registro", component:RegistroComponent},
  {path: "memorandos", component:MemorandosComponent},
  {path: "home", component:HomeComponent},
  {path: "recibidos", component: RecibidosComponent},
  {path: "enviados", component: EnviadosComponent},
  {path: "nuevoMensaje", component: NuevoMensajeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
