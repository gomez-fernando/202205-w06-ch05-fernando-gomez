import { categories, sizes } from "./product";

export class cartProduct{


    constructor(
        public price: number,
        public name: string,
        public size: sizes,
        public origin: string,
        public image: string,
        public description: string,
        public category: categories,
        public id: number,
        public cartId: number,
        public promo: boolean
    ){
    }
}