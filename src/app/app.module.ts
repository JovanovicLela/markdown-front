import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from "ngx-markdown";
import { HeaderComponent } from './components/header/header.component';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MydocsComponent } from './components/mydocs/mydocs.component';
import {DocCellComponent} from "./components/doc-cell/doc-cell.component";
import { RegisterComponent } from './components/register/register.component';
import { ToastrModule } from "ngx-toastr";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MydocsComponent,
    DocCellComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot([]),
    RouterOutlet,
    RouterLink,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
