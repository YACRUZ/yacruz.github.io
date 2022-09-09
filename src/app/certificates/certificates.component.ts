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


    this.certificates.push(cer1);
    this.certificates.push(cer2);
  }

}
