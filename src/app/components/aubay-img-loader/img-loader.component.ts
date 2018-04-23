import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-img-loader',
  templateUrl: './img-loader.component.html',
  styleUrls: ['./img-loader.component.css']
})

export class AubayImgLoaderComponent implements AfterViewInit {
  @Input() public imageSrc: string;
  @ViewChild('imgInstance') private imgInstance;
  public imageLoad: boolean;

  constructor() {
    this.imageLoad = false;
  }

  ngAfterViewInit(): void {
    this.imgInstance.nativeElement.addEventListener('load', () => {
      this.imageLoad = true;
    });
  }
}
