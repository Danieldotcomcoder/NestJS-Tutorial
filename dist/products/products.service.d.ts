import { Product } from './product.module';
export declare class ProductsService {
    private products;
    insertProduct(title: string, desc: string, price: number): string;
    getProducts(): Product[];
}
