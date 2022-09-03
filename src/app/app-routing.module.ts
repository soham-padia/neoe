import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {CommonModule} from "@angular/common";
import {AgainstUnAuthedGuardGuard} from "./guards/against-un-authed-guard.guard";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    canActivate: [AgainstUnAuthedGuardGuard]
  },
  {
    path:'login',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
