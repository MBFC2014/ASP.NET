import { Component, Input, inject } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: Product | null = null;
  private router = inject(Router);

  public select(product: Product): void {
    this.router.navigate([`/products/${product.productId}`]);
  }

}
