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
    let edu1 = {
      fecha: "2017-2020",
      ubicacion: "Huatusco, ver",
      escuela: "Esc. Gral. Francisco J. Mugica"

    };
    let edu2 = {
      fecha: "2020-2024",
      ubicacion: "Orizaba, ver",
      escuela: "Universdad Veracruzana"
    };


    this.education.push(edu1);
    this.education.push(edu2);
  }
}

