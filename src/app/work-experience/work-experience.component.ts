import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let work1 = {
            fecha : "2020-2022",
            ubicacion : "Orizaba, ver",
            puesto : "CEO",
            empresa : "Tachiyomi",
            logros : [
              { descripcion: "Trabajador en API"},
              { descripcion: "Algoritmo de busqueda"},
            ]

        };
    let work2 = {
            fecha : "2019-2020",
            ubicacion : "Orizaba, ver",
            puesto : "CEO",
            empresa : "SHUESHIA",
            logros : [
              { descripcion: "Redes neuronales"},
              { descripcion: "Lector reader"},
            ]
    };


    this.workExperience.push(work1);
    this.workExperience.push(work2);
  }

}
