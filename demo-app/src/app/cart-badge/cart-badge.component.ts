import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent implements OnInit {


  cartItemCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartStream()
      .subscribe(cart => {
        this.cartItemCount = cart.cartItemCount;
      })
  }

}
