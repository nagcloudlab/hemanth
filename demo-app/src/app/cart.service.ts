import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {



  cart = {}
  cartItemCount = 0

  cartStream: BehaviorSubject<any> = new BehaviorSubject<any>({ cart: {}, cartItemCount: 0 })

  constructor() { }

  getCartStream() {
    return this.cartStream;
  }

  addToCart(event) {
    const { item } = event;
    const { id } = item;
    let itemLine = this.cart[id];
    if (itemLine) {
      itemLine = { ...itemLine, qty: itemLine.qty + 1 }
    } else {
      itemLine = { item, qty: 1 }
    }
    this.cart = { ...this.cart, [id]: itemLine }
    this.cartItemCount = Object.keys(this.cart).length;
    this.cartStream.next({ value: this.cart, cartItemCount: this.cartItemCount })
  }

}
