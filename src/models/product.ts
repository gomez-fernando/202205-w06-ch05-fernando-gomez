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

    promo: boolean;

    constructor(
        public id: number,
        public price: number,
        public name: string,
        public size: sizes,
        public origin: string,
        public image: string,
        public description: string,
        public category: categories
    ){
        this.promo = false;
    }
}