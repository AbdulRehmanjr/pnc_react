
import { FieldValues } from "react-hook-form";
import { API } from "../api/api";


class LoginService {
    #url: string = `${API.baseUrl}/${API.user}`
    
    loginUser = async (data: FieldValues) => {
        return await fetch(`${this.#url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }

    setToken(data){
        localStorage.setItem('token_pnc',JSON.stringify(data))
    }
}


export default LoginService