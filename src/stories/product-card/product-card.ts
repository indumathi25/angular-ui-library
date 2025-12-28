import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.interface';

/**
 * Product Card Component
 * Displays a summary of a product including its image, title, price, and stock status.
 * Used in product lists.
 */
@Component({
  selector: 'storybook-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
})
export class ProductCard {
  @Input({ required: true }) product!: Product;

  /**
   * Whether this card should be treated as high priority (e.g., for image loading).
   * Defaults to false.
   */
  @Input() priority = false;

  /**
   * Threshold value to determine if the product is low on stock.
   * Defaults to 10.
   */
  @Input() lowStockThreshold = 10;
}
