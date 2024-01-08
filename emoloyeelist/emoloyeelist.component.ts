import { Component, OnInit } from '@angular/core';
import { Productapi } from '../productapi';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-emoloyeelist',
  templateUrl: './emoloyeelist.component.html',
  styleUrls: ['./emoloyeelist.component.css']
})
export class EmoloyeelistComponent implements OnInit {


    products! : Productapi[];
  
  
    //firstwar var here
    constructor( 
      //second var constructor 
      private pservice :ProductsService ,
      private Cservice:CartService
  
         ){
  
    //  first wary  load them here
    }
  
    ngOnInit(): void {
        //second var load here
        this.pservice.getproduct().subscribe((data :Productapi[] )=> { this.products = data });
  
    }
  
    addtocart( product:Productapi){
  
      this.Cservice.addtocart(product) ;
      console.log(product);
    }
  
  }
  


