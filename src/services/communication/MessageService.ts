import axios from "axios"
import { Environment } from "../../constants/environment"


const url: string = `${Environment.baseUrl}/${Environment.message}`


export const getChatMessages = (sender: string, receiver: string): Promise<Response> => {
    return axios.get(`${url}/chat`, {
        params: {
            sender: sender,
            receiver: receiver
        }
    }
    )
}