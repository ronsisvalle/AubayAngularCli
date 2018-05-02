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
      'assets/funny-snake.png',
      'Giorgio',
      'Ciao, sono Giorgio il serpente',
      'Striscia');
    let dog = new Dog(
      'assets/funny-dog.png',
      'Filippo',
      'Ciao, sono Filippo il super cane',
      'Abbaglia'
      )
    ;
    let horse = new Horse(
      'assets/funny-horse.jpg',
      'Varenne',
      'Ciao, sono Varenne un cavallo terribile',
      'Nitrisci');

    this.vectorAnimals.push(snake);
    this.vectorAnimals.push(dog);
    this.vectorAnimals.push(horse);
  }

  ngOnInit(): void {

  }
}
