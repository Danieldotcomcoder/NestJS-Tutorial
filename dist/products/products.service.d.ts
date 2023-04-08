import { Product } from './product.module';
export declare class ProductsService {
    products: Product[];
    insertProduct(title: string, description: string, price: number): void;
}
