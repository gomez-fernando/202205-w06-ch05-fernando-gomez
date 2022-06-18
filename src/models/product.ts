export enum sizes{
    'S' = 'S', 
    'M' = 'M', 
    'L' = 'L', 
    'XL' = 'XL'
}

export enum categories{
    'coffee' = 'coffee',
     'tea' = 'tea'
}

export class Product{

    static generateId(): number {
        return Math.ceil(Math.random() * 100_000);
    }

    id: number;
    promo: boolean;

    constructor(
        public price: number,
        public name: string,
        public size: sizes,
        public origin: string,
        public image: string,
        public description: string,
        public category: categories
    ){
        this.id = Product.generateId();
        this.promo = false;
    }
}