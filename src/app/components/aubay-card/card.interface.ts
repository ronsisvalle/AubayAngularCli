export interface CardInterface {
  animalsKind: string;
  imgSrc: string;
  titleText: string;
  descText: string;
  buttonText?: string;

  actionClick?(paramImg);
}
