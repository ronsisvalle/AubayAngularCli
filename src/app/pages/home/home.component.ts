import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class AubayHomePageComponent implements AfterViewInit {
  public companyName = 'Aubay';

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log('ok');
  }
}
