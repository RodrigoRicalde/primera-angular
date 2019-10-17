import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent}from "./main/main.component";
import{FormularioComponent}from "./formulario/formulario.component";

const routes: Routes = [
{path:"principal", component: MainComponent },
{path:"formulario", component: FormularioComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
