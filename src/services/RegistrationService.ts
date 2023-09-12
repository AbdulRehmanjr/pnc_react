
import { FieldValues } from "react-hook-form";
import { API } from "../api/api";


class RegistrationService {
    #url: string = `${API.baseUrl}/${API.user}`
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