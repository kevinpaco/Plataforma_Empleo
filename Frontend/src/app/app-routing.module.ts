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
import { TablaPostulantesComponent } from './components/tabla-postulantes/tabla-postulantes.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MostrarOfertaComponent } from './components/mostrar-oferta/mostrar-oferta.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  //empleador
  {path:'empleador/principal',component:EmpleadorComponent},
  {path:'empleador-form/:id',component:EmpleadorFormComponent},
  {path:'empleador/generar/oferta', component: FormOfertasLaboralesComponent},
  {path:'empleador/oferta/postulantes', component:TablaPostulantesComponent},
  //ciudadanos
  {path:'ciudadano/principal',component:CiudadanoComponent},
  {path:'ciudadano/generar/curriculum',component:FormCurriculumComponent},
  {path:'ciudadano-form/:id',component:CiudadanoFormComponent},
  {path:'ciudadano/cursos',component:CursosComponent},
  {path:'ciudadano/oferta/:idOferta',component:MostrarOfertaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
