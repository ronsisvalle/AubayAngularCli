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

  public actionClickCard() {
    this.startTextToSpeach(this.cardData.descText);
    this.cardData.actionClick();
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
