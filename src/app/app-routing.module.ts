import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {MydocsComponent} from "./components/mydocs/mydocs.component";
import {RegisterComponent} from "./components/register/register.component";
import {DocComponent} from "./components/doc/doc.component";

const routes: Routes =  [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mydocs', component: MydocsComponent },
  { path: 'doc/:id', component: DocComponent},
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: '**', redirectTo: "/home", pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
