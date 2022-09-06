import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let work1 = {
      fecha: "2017-2020",
      ubicacion: "Huatusco, ver",
      escuela: "Esc. Gral. Francisco J. Mugica"
    };

    let work2 = {
      fecha: "2020-2024",
      ubicacion: "Orizaba, ver",
      escuela: "Universidad Veracruzana"
    };


    this.education.push(work1);
    this.education.push(work2);
  }

}
