import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
    cursos: Array<Curso>;
    curso:Curso;

    constructor(){
         this.cursos=new Array<Curso>();
         this.curso=new Curso();
    }


    ngOnInit(): void {
         this.CargarCursos();
    }

    CargarCursos(){
      let curso1= new Curso();
      curso1.categoria="Informatica";
      curso1.descripcion="En este curso aprendera las bases de la informatica, va a comprender como el manejo del paquete office, en que tareas aplicarlos y como aplicarlos, tambien podra ser capas de crear diseños en word como applicasion en excel u presentaciones en powerpoint.";
      curso1.nombreCurso="Operador de PC";
      curso1.vacantes=5;
      curso1.fechaInicio="2024/02/01";
      curso1.fechaFin="2024/04/30";

      let curso2= new Curso();
      curso2.categoria="Informatica";
      curso2.descripcion="En este curso aprendera las bases de la finformatica";
      curso2.nombreCurso="Operador de PC";
      curso2.vacantes=5;
      curso2.fechaInicio="2024/02/01";
      curso2.fechaFin="2024/04/30";

      let curso3= new Curso();
      curso3.categoria="Informatica";
      curso3.descripcion="En este curso aprendera las bases de la finformatica";
      curso3.nombreCurso="Operador de PC";
      curso3.vacantes=5;
      curso3.fechaInicio="2024/02/01";
      curso3.fechaFin="2024/04/30";

      let curso4= new Curso();
      curso4.categoria="Informatica";
      curso4.descripcion="En este curso aprendera las bases de la finformatica";
      curso4.nombreCurso="Operador de PC";
      curso4.vacantes=5;
      curso4.fechaInicio="2024/02/01";
      curso4.fechaFin="2024/04/30";
     this.cursos.push(curso1,curso2,curso3,curso4);

    }
}
