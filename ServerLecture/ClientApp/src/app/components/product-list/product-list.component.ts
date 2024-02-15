import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { Product } from '../../models/product';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  
  private _productService: ProductService = inject(ProductService);

  // public products: Product[] = [];
  public products: Observable<Product[]> = of([] as Product[]);

  ngOnInit(): void {
   
    // this._productService.getProducts().subscribe(result => {
    //   // console.log(result);
    //   this.products = result;
    // });

    this.products = this._productService.getProducts();
  }

}
