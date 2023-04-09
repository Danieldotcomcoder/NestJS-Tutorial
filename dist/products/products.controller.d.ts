import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): any;
    getAllProducts(): import("./product.module").Product[];
    getProduct(prodId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
}
