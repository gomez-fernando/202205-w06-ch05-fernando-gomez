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
    setProduct(task: Product): Promise<Product> {
        // POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    updateProduct(task: Product): Promise<Partial<Product>> {
        // PUT / PATCH
        return fetch(this.url + `/${task.id}`, {
            method: 'PATCH',
            body: JSON.stringify(task),
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
