import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
   sliderImg1:string='assets/images/mypic.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

}
