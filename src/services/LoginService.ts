
import { FieldValues } from "react-hook-form";
import { axiosInstance } from "../interceptor/requestInterceptor";
import { Environment } from "../constants/environment";

const url: string = `${Environment.baseUrl}/${Environment.user}`

/**
 * The function `setToken` stores the provided data as a JSON string in the browser's local storage
 * with the key 'token_pnc'.
 * @param {User || any } data - The `data` parameter is the token data that you want to store in the local
 * storage.
 */
export const setToken = (data) => {
    localStorage.setItem('token', JSON.stringify(data))
}

/**
 * The `loginUser` function sends a POST request to the `/login` endpoint with the provided data and
 * returns a Promise that resolves to a Response object.
 * @param {FieldValues} data - The `data` parameter is an object that contains the user's login
 * credentials. It can include fields such as `username` and `password`.
 * @returns a Promise that resolves to a Response object.
 */
export const loginUser = (data: FieldValues): Promise<Response> => {

    return axiosInstance.post(`${url}/login`,data)
}

/**
 * The function `currentUserInfo` makes an HTTP GET request to retrieve the current user's information.
 * @returns The function `currentUserInfo` is returning a promise that resolves to the result of the
 * `axios.get` request.
 */
export const currentUserInfo = () : Promise<Response> =>{

    return axiosInstance.get(`${url}/getUser`)
}