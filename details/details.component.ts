import { Component,  OnInit  } from '@angular/core';
import { Productapi } from '../productapi';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  id!:number;

  product!: Observable<Productapi>;

  constructor(
     private route :ActivatedRoute ,
     private pservcse :ProductsService 
  ){

  }
  ngOnInit(): void {
   
    this.id = Number(this.route.snapshot.params['id']);

    this.product =  this.pservcse.getproductbyidra(this.id);

  }}