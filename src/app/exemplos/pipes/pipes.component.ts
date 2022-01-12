import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  date = new Date();
  nome = "José Almir";
  percentual = 0.5324;
  salario = 3000;
  user = {name:"Camila", id:"01"}

  constructor() { }

  ngOnInit(): void {
  }

}
