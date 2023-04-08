import { Injectable } from '@nestjs/common';

import { Product } from './product.module';
@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const prodId = new Date().toString();
    const newProduct = new Product(
      new Date().toString(),
      title,
      description,
      price,
    );
    this.products.push(newProduct);
    return prodId;
  }
}
