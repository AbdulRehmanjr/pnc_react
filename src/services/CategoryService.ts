
import { API } from "../api/api";
import axois from 'axios'


const url: string = `${API.baseUrl}/${API.category}`


/**
 * The `addCategory` function takes a name and an image file, creates a FormData object, appends the
 * name and image to it, and then sends a POST request to a specified URL with the FormData.
 * @param {string} name - A string representing the name of the category.
 * @param {File} image - The `image` parameter is of type `File`, which means it represents a file
 * selected by the user. It could be an image file, such as a JPEG or PNG file.
 * @returns a Promise object that resolves to a Response object.
 */
export const addCategory = (name: string, image: File): Promise<Response> => {

    let formData = new FormData()

    formData.append('name', name)
    formData.append('image', image)

    return axois.post(`${url}/save`, formData)
}

/**
 * The function getAllCategories makes an asynchronous request to retrieve all categories from a
 * specified URL.
 * @returns a Promise that resolves to a Response object.
 */
export const getAllCategories = (): Promise<Response> => {

    return axois.get(`${url}/all`)
}

export const deleteCategories = (catIds: string[]): Promise<Response> => {

    return axois.delete(`${url}/delete/${catIds}`,)
}