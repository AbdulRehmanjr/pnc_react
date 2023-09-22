import { CartItem } from "./CartItem"

export class Cart {
    _id:string
    cartItems:CartItem[] = []
    buyerEmail:string
}