import {Animal} from './animals';

const gifStriscia = 'assets/striscia.gif';

export class Snake extends Animal {

  constructor(imgSrc: string, titleText: string, descText: string, buttonText?: string, actionClick?: () => void) {
    super('Snake');
    this.imgSrc = imgSrc;
    this.titleText = titleText;
    this.descText = descText;
    this.buttonText = buttonText;
    this.actionClick = actionClick || this.actionClick;
  }

  actionClick() {
    super.actionClick(gifStriscia);
  }
}
