import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// routing
import {AppRoutingModule} from './app-routing.module';

// components
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {MainComponent} from './main/main.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { IndexComponent } from './main/index/index.component';
import { ContactComponent } from './main/contact/contact.component';
import { AboutComponent } from './main/about/about.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, MainComponent, NavbarComponent, FooterComponent, IndexComponent, ContactComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
