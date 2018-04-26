import {Animal} from './animals';

const hourseGif = 'assets/nitrisci.gif';

export class Horse extends Animal {


  constructor(imgSrc: string, titleText: string, descText: string, buttonText?: string, actionClick?: () => void) {
    super('Horse');
    this.imgSrc = imgSrc;
    this.titleText = titleText;
    this.descText = descText;
    this.buttonText = buttonText;
    this.actionClick = actionClick || this.actionClick;
  }

  actionClick() {
    super.actionClick(hourseGif);
  }
}
