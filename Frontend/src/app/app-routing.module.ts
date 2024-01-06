import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EmpleadorComponent } from './components/roles/empleador/empleador.component';
import { EmpleadorFormComponent } from './components/roles/empleador-form/empleador-form.component';
import { CiudadanoComponent } from './components/roles/ciudadano/ciudadano.component';
import { CiudadanoFormComponent } from './components/roles/ciudadano-form/ciudadano-form.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  //empleador
  {path:'empleador',component:EmpleadorComponent},
  {path:'empleador-form/:id',component:EmpleadorFormComponent},
  //ciudadanos
  {path:'ciudadano',component:CiudadanoComponent},
  {path:'ciudadano-form/:id',component:CiudadanoFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
