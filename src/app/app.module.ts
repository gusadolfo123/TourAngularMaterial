import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// rutas
import {AppRoutingModule} from './app-routing.module';

// componentes
import {AppComponent} from './app.component';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// modulos personalizados
import {MainModule} from './main/main.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MainModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
