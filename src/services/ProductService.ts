import axios from "axios";
import { API } from "../api/api";


const url:string = `${API.baseUrl}/${API.product}`


/**
 * The function getAllProduct makes a GET request to retrieve all products from a specified URL.
 * @returns a Promise that resolves to a Response object.
 */
export const  getAllProducts = (page:number,itemsPerPage:number) :Promise<Response> =>{

    return axios.get(`${url}/all?page=${page}&itemsPerPage=${itemsPerPage}`)
}