import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {
  oculto: boolean = false;
  ocultar() {
    this.oculto=true
  }

  alimento: string = ""
  compras= ["arroz", "carne", "tempero"];
  add(){
    if (this.alimento.length>0) {
      this.compras.push(this.alimento)
      this.alimento=""
    }else {
      alert("entrada inválida")
    }
  }

  status: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
