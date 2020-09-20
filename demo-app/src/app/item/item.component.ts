import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartService } from '../cart.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {


  @Input("value") item;
  // @Output() buy = new EventEmitter();

  currentTab = 1

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  changeTab(e, tabIndex) {
    e.preventDefault()
    this.currentTab = tabIndex
  }

  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex
  }

  handleBuy(event) {
    // this.buy.emit({ item: this.item })
    // const cartService = new CartService();
    this.cartService.addToCart({ item: this.item })

  }

}
