import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from "ngx-markdown";
import { HeaderComponent } from './components/header/header.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { LogINComponent, LogInComponent } from './components/log-in/log-in.component';
import { LoginComponent } from './components/login/login.component';
import { MydocsComponent } from './components/mydocs/mydocs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LogINComponent,
    LogInComponent,
    LoginComponent,
    MydocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    RouterOutlet,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
