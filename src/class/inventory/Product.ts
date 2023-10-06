import { Category } from "../Category"

export class Product {
    _id:string
    name:string
    description:string
    code:string
    category:Category
    imageSrc:string
    price:number
    quantity:number
    rating:number
    createdAt:string
}