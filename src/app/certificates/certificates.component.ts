import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificates: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let cer1 = {
      fecha: "[2020]",
      titulo: "Certificado en Scrum",
      descripcion: "Recibido por VMEdu, en ScrumStudy",
      link: ""
    };

    let cer2 = {
      fecha: "[2022]",
      titulo: "Certificado en TI Google",
      descripcion: "Recibido por Google developers, en Cursea"
    };

    let cer3 = {
      fecha: "[2023]",
      titulo: "Certificado de Python",
      descripcion: "Recibido por Kaggle para Python",
      link: "https://bit.ly/PythonYahir"
    };
    
    let cer4 = {
      fecha: "[2023]",
      titulo: "Certificado de Pandas",
      descripcion: "Recibido por Kaggle para Pandas",
      link: "https://bit.ly/PandasYahir"
    };

    let cer5 = {
      fecha: "[2023]",
      titulo: "Certificado de Intro to Machine Learning",
      descripcion: "Recibido por Kaggle para Intro Machine Learning",
      link: "https://raw.githubusercontent.com/YACRUZ/Cursos/main/Intro_ML/Yahir%20Jesus%20Jacome%20Cogco%20-%20Intro%20to%20Machine%20Learning.png"
    };

    let cer6 = {
      fecha: "[2023]",
      titulo: "Certificado de Intermediate to Machine Learning",
      descripcion: "Recibido por Kaggle para Intermediate Machine Learning",
      link: "https://raw.githubusercontent.com/YACRUZ/Cursos/main/Inter_ML/Yahir%20Jesus%20Jacome%20Cogco%20-%20Intermediate%20Machine%20Learning.png"
    };

    this.certificates.push(cer1);
    this.certificates.push(cer2);
    this.certificates.push(cer3);
    this.certificates.push(cer4);
    this.certificates.push(cer5);
    this.certificates.push(cer6);
  }
  
}
