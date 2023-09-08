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
      descripcion: "Recibido por VMEdu, en ScrumStudy"
    };

    let cer2 = {
      fecha: "[2022]",
      titulo: "Certificado en TI Google",
      descripcion: "Recibido por Google developers, en Cursea"
    };

    let cer3 = {
      fecha: "[2023]",
      titulo: "Certificado de Python",
      Link: "https://raw.githubusercontent.com/YACRUZ/Cursos/main/Python/Yahir%20Jesus%20Jacome%20Cogco%20-%20Python.png"
    };
    
    let cer4 = {
      fecha: "[2023]",
      titulo: "Certificado de Pandas",
      Link: "https://raw.githubusercontent.com/YACRUZ/Cursos/main/Pandas/Yahir%20Jesus%20Jacome%20Cogco%20-%20Pandas.png"
    };


    this.certificates.push(cer1);
    this.certificates.push(cer2);
    this.certificates.push(cer3);
    this.certificates.push(cer4);
  }

}
