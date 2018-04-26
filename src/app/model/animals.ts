import {CardInterface} from '../components/aubay-card/card.interface';

const DELAY_RESET_ORI_IMG = 2000;

export class Animal implements CardInterface {
  animalsKind: string;
  imgSrc: string;
  titleText: string;
  descText: string;
  buttonText: string;

  actionClick?(paramImg) {
    let originImg = this.imgSrc;
    this.imgSrc = paramImg;
    setTimeout(() => {
      this.imgSrc = originImg;
    }, DELAY_RESET_ORI_IMG);
  }

  constructor(kind: string = 'No name...') {
    this.animalsKind = kind;
  }

}
