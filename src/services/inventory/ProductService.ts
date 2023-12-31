import axios from "axios";
import { Environment } from "../../constants/environment";
import { Product } from "../../class/inventory/Product";


const url:string = `${Environment.baseUrl}/${Environment.product}`


/**
 * The function getAllProduct makes a GET request to retrieve all products from a specified URL.
 * @returns a Promise that resolves to a Response object.
 */
export const  getAllProductsByPage = (page:number,itemsPerPage:number) :Promise<Response> =>{

    return axios.get(`${url}/all?page=${page}&itemsPerPage=${itemsPerPage}`)
}

export const getAllProducts = ():Promise<Response> =>{

    return axios.get(`${url}/all`)
}

/**
 * The function `getProductById` takes a `productId` as input and returns a promise that resolves to a
 * `Response` object.
 * @param {string} productId - The `productId` parameter is a string that represents the unique
 * identifier of a product.
 * @returns a Promise that resolves to a Response object.
 */
export const getProductById = (productId:string):Promise<Response>=>{
        return axios.get(`${url}/${productId}`)
}

export const createProduct = (product:Product,file:File) :Promise<Response>  =>{

    let formData = new FormData()
    formData.append('product', JSON.stringify(product))
    formData.append('image', file)

    return axios.post(`${url}/save`,formData)
}