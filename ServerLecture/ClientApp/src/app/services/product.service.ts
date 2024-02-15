import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _http = inject(HttpClient);

  constructor() { }

  public getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>('api/products');
  }

  // TODO: wrote this after class
  public getProduct(id: number): Observable<Product> {
    return this._http.get<Product>(`api/products/${id}`);
  }

}
