import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {


  items = [
    {
      id: 1,
      name: 'laptop',
      price: 100.00,
      description: 'New Mac pro',
      canBuy: true,
      imagePath: "assets/Laptop.png"
    },
    {
      id: 2,
      name: 'mobile',
      price: 50.00,
      description: 'New pro',
      canBuy: true,
      imagePath: "assets/Mobile.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
