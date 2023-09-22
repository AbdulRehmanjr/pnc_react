import { API } from "../../api/api";
import { Product } from "../../class/Product";
import { Cart } from "../../class/order/Cart";
import { CartItem } from "../../class/order/CartItem";


const url: string = `${API.baseUrl}/${API.cart}`

//* get the cart from storage or make new one 
export const getCart = (): Cart => {

    const cartData = JSON.parse(localStorage.getItem('cart'))
    return cartData.length != 0 ? cartData : new Cart();
}

//* Initialize the cart
const cart: Cart = getCart();

export const addToCart = (product: Product) => {

    //* check if product is already in cart 
    const existingCartItem = cart?.cartItems.find(
        (item:CartItem) => item.product._id === product._id
    );

    //* if productis already in cart then check for limit of product 
    if (existingCartItem) {
        if(!(existingCartItem?.quantity < 5))
            return
            existingCartItem.quantity += 1;
    }
    else {
        //* make new cart item and add to cart 
        if (cart.cartItems?.length < 5) {
            let cartItem = new CartItem();
            cartItem.product = product
            cartItem.quantity = 1

            cart.cartItems.push(cartItem)
        }
    }

    cartUpdateCallback(updateCartCount())
    storeCartData(cart);
}

let cartUpdateCallback: (newCount: number) => void = () => {}; 

export const setCartUpdateCallback = (callback: (newCount: number) => void) => {
    cartUpdateCallback = callback;
}
export const currentCount = ():number=>{
    const count=   cart.cartItems?.reduce(
        (total, item) => total + item.quantity,
        0
    )
    console.log(count)
    return count
}
const updateCartCount = () => {
   return  cart.cartItems?.reduce(
        (total, item) => total + item.quantity,
        0
    )
}

export const storeCartData = (cart:Cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}