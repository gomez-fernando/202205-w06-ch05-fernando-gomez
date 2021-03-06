import { Product } from '../models/product';

export class HttpStoreProducts {
    url: string;
    constructor() {
        this.url = 'http://localhost:4000/products';
    }
    async getProducts(): Promise<Array<Product>> {
        // GET
        const resp = await fetch(this.url);
        return await resp.json();
    }
    async getProduct(id: Product['id']): Promise<Product> {
        // GET
        const resp = await fetch(this.url + `/${id}`);
        return await resp.json();
    }
    setProduct(product: Product): Promise<Product> {
        // POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    updateProduct(product: Product): Promise<Partial<Product>> {
        // PUT / PATCH
        return fetch(this.url + `/${product.id}`, {
            method: 'PATCH',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    deleteProduct(id: string): Promise<number> {
        // DELETE
        return fetch(this.url + `/${id}`, {
            method: 'DELETE',
        }).then((response) => response.json());
    }
}
