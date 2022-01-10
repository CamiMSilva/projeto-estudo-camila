import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome= 'Camila';
  idade= 30;
  linkImagem = 'https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649_960_720.jpg';
  larguraImagem = 30;
  alturaImagem = 30;

  calculaAnoNascimento(): number{
    const today = new Date();
    return today.getFullYear() - this.idade;
  }
  aumentar() {
    this.larguraImagem +=20;
    this.alturaImagem +=15;
  }
  diminuir() {
    this.larguraImagem -=20;
    this.alturaImagem -=15;
  }
}
