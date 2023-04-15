import { Component } from '@angular/core';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent {

  items = ['Entenda o motivo'];
  expandedIndex = 0;

  contratar(): void {
    window.location.href = "https://whatsa.me/5511949520936/?t=Quero%20adquirir%20o%20MK-Edge"
  }

}
