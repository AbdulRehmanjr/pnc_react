import axios from "axios"
import { Environment } from "../../constant/environment"
import { SellerRequest } from "../../class/seller/SellerRequest"


const url:string = `${Environment.baseUrl}/${Environment.sellerRequest}`

/**
 * The function `requestSeller` sends a POST request to a specified URL with data and a document file.
 * @param {any} data - The `data` parameter is an object that contains information about the seller. It
 * could include properties such as the seller's name, address, contact information, etc.
 * @param {File} document - The `document` parameter is of type `File`. It represents a file that will
 * be sent as part of the request.
 * @returns a Promise that resolves to a Response object.
 */
const becomeSeller = (data:SellerRequest,document:File): Promise<Response> => {

    let formData = new FormData()

    formData.append('seller', JSON.stringify(data))
    formData.append('document', document)

    return axios.post(`${url}/create`, formData) 
}

/**
 * The function getAllRequests returns a promise that resolves to a Response object.
 * @returns The function `getAllRequests` is returning a Promise that resolves to a `Response` object.
 */
const getAllRequests = ():Promise<Response> =>{

    return axios.get(`${url}/all`)
}
 export {becomeSeller,getAllRequests}