import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {CardInterface} from './card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class AubayCardComponent {
  @Input() public cardData: CardInterface;

  constructor() {
  }

}
