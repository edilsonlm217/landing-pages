import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lp1',
  templateUrl: './lp1.component.html',
  styleUrls: ['./lp1.component.scss']
})
export class Lp1Component {
  constructor(public router: Router) { }

  async verOferta(): Promise<void> {
    await this.router.navigateByUrl('oferta');
  }
}
