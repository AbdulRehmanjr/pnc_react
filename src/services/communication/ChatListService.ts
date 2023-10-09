import axios from "axios"
import { Environment } from "../../constants/environment"


const url:string = `${Environment.baseUrl}/${Environment.chatlist}`



export const getChatListById = (senderId:string):Promise<Response>=>{
    return axios.get(`${url}/${senderId}`)
}
