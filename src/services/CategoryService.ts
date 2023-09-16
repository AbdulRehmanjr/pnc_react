import { API } from "../api/api";


export const addCategory = (name: string, image: File): Promise<Response> => {

    const formData = new FormData()

    formData.append('name', name)
    formData.append('image', image)

    return fetch(`${API.baseUrl}/${API.category}/save`, {
        method: 'POST',
        body: formData,
    })
}