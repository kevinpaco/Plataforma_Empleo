import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EmpleadorComponent } from './components/roles/empleador/empleador.component';
import { EmpleadorFormComponent } from './components/roles/empleador-form/empleador-form.component';
import { CiudadanoComponent } from './components/roles/ciudadano/ciudadano.component';
import { CiudadanoFormComponent } from './components/roles/ciudadano-form/ciudadano-form.component';
import { FormOfertasLaboralesComponent } from './components/form-ofertas-laborales/form-ofertas-laborales.component';
import { FormCurriculumComponent } from './components/form-curriculum/form-curriculum.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  //empleador
  {path:'empleador/principal',component:EmpleadorComponent},
  {path:'empleador-form/:id',component:EmpleadorFormComponent},
  {path:'empleador/generar/oferta', component: FormOfertasLaboralesComponent},
  //ciudadanos
  {path:'ciudadano/principal',component:CiudadanoComponent},
  {path:'ciudadano/generar/curriculum',component:FormCurriculumComponent},
  {path:'ciudadano-form/:id',component:CiudadanoFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
