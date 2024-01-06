import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CiudadanoComponent } from './components/roles/ciudadano/ciudadano.component';
import { CiudadanoFormComponent } from './components/roles/ciudadano-form/ciudadano-form.component';
import { EmpleadorComponent } from './components/roles/empleador/empleador.component';
import { EmpleadorFormComponent } from './components/roles/empleador-form/empleador-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CiudadanoComponent,
    CiudadanoFormComponent,
    EmpleadorComponent,
    EmpleadorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
