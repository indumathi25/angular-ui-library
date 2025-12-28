import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from '../stories/product-card/product-card';
import { Product } from '../stories/product-card/product.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('taskbox');

  protected readonly product: Product = {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp',
    images: [
      'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.jpg',
      'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/2.jpg',
      'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/3.jpg',
      'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/4.jpg',
      'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp',
    ],
  };
}
