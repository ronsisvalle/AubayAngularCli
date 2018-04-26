import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CardInterface} from '../../components/aubay-card/card.interface';
import {Snake} from '../../model/snake';
import {Horse} from '../../model/horse';
import {Dog} from '../../model/dog';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class AubayHomePageComponent implements OnInit {
  public vectorAnimals: Array<CardInterface> = [];

  constructor() {
    let snake = new Snake(
      'https://cdn.vectorstock.com/i/1000x1000/24/60/funny-snake-cartoon-vector-952460.jpg',
      'Giorgio',
      'This is a fantastic card',
      'Striscia');
    let dog = new Dog(
      'http://www.lequzhai.com/data/out/66/685854.png',
      'Filippo',
      'This is a fantastic card',
      'Abbaglia'
      )
    ;
    let horse = new Horse(
      'https://res.cloudinary.com/teepublic/image/private/s--9wA-BGhK--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1510211727/production/designs/2038717_1.jpg',
      'Francesco',
      'This is a fantastic card',
      'Nitrisci');

    this.vectorAnimals.push(snake);
    this.vectorAnimals.push(dog);
    this.vectorAnimals.push(horse);
  }

  ngOnInit(): void {

  }
}
