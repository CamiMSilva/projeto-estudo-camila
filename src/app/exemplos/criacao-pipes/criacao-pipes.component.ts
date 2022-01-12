import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criacao-pipes',
  templateUrl: './criacao-pipes.component.html',
  styleUrls: ['./criacao-pipes.component.scss']
})
export class CriacaoPipesComponent implements OnInit {
  numeros = [1,2,3];
  add(){
    //this.numeros = [...this.numeros, 1]; //altera a referência
    this.numeros.push(Math.floor(Math.random() * 10));//alteração não muda a referência do vetor
  }

  query = '';
  linguagens = [
    "Python",
    "Ruby",
    "Swift",
    "Kotlin",
    "C#",
    "C++",
    "Rust",
    "Go",
    "SQL",
    "Java",
    "PHP",
    "Javascript",
    "Cobol",
    "Clojure",
    "Flutter",
    "Typescript"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
