import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  topPro: any = [
    { name: "Smooth iced coffee", price: "15.00", img: "http://hotcoffee-html.themerex.net/images/ice-coffee-180x180.jpg" },
    { name: "Mac&cheese panini", price: "14.00", img: "http://hotcoffee-html.themerex.net/images/panini-180x180.jpg" },
    { name: "Americano", price: "10.00", img: "http://hotcoffee-html.themerex.net/images/americano-180x180.jpg" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
