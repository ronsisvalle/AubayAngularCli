import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CardInterface} from './card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class AubayCardComponent {
  @Input() public cardData: CardInterface;
  @Output() public pippo: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  public actionClickCard() {
    this.startTextToSpeach(this.cardData.descText);
    this.cardData.actionClick();
    this.pippo.next('Ciccio');
  }

  private startTextToSpeach(dataText) {
    let msg = new SpeechSynthesisUtterance();
    //  msg.voice = window.speechSynthesis.getVoices()[11];
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = dataText;
    window.speechSynthesis.speak(msg);
  }
}
