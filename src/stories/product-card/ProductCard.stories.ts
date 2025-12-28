import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCard } from './product-card';

const meta: Meta<ProductCard> = {
  title: 'Example/ProductCard',
  component: ProductCard,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args: ProductCard) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ProductCard>;

export const Default: Story = {
  args: {
    product: {
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
    },
  },
};

export const LowStock: Story = {
  args: {
    lowStockThreshold: 10,
    product: {
      id: 2,
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 2,
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
    },
  },
};
