import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  bike1 : string;
  bike2 : string;
  bike3 : string;

  constructor() {
    this.bike1 = "/assets/img/img1.jpg";
    this.bike2 = "/assets/img/img2.jpg";
    this.bike3 = "/assets/img/img3.jpg";
   }

  ngOnInit(): void {
  }

}
