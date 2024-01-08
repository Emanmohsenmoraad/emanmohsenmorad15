import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Productapi } from '../productapi';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent {
  productscart! : Productapi[];


  constructor (

    private Cservice:CartService,
  ){}
  ngOnInit(): void {
  

    this.productscart =   this.Cservice.getcartitem();


  }

  remove(id:number){

    this.Cservice.removeitem(id);
  }
}
