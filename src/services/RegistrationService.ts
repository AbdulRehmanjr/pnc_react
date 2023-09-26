
import { FieldValues } from "react-hook-form";
import { Environment } from "../constant/environment";



class RegistrationService {
    #url: string = `${Environment.baseUrl}/${Environment.user}`
    registerUser = async (data: FieldValues) => {

        return await fetch(`${this.#url}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }
}


export default RegistrationService