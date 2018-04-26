import {Animal} from './animals';

const gifDog = 'assets/abbaglia.gif';

export class Dog extends Animal {

  constructor(imgSrc: string, titleText: string, descText: string, buttonText?: string, actionClick?: () => void) {
    super('Dog');
    this.imgSrc = imgSrc;
    this.titleText = titleText;
    this.descText = descText;
    this.buttonText = buttonText;
    this.actionClick = actionClick || this.actionClick;
  }

  actionClick() {
    super.actionClick(gifDog);
  }

}
