import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllProducts, getProductById } from "../../services/ProductService";

import { Rating } from "primereact/rating";
import { Product } from "../../class/Product";
import { Products } from "./Product";


export const ProductDetail = () => {

    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState<Product>()
    const [moreProducts, setMoreProducts] = useState<Product[]>()
    useEffect(() => {
        getProductById(searchParams.get('productId'))
            .then(response => setProduct(response['data']))
            .catch(error => console.log(error))
        getAllProducts(1, 6)
            .then(response => setMoreProducts(response['data']))
            .catch(error => console.log(error))
    }, [])

    return (
        <section className="col-span-8 my-2">
            <div className="grid grid-cols-8 m-2">
                <div className="col-span-3 p-4">
                    <img className="rounded-lg shadow-lg w-full h-[420px]" src={product?.imageSrc} alt="Image" />
                </div>
                <div className="col-span-5 p-2">
                    <div className="flex flex-row justify-between pr-4 mr-4">
                        <h2 className="text-4xl font-bold text-black tracking-tight">{product?.name.toLocaleUpperCase()}</h2>
                        <p className="text-2xl font-bold"> $ {product?.price}</p>
                    </div>
                    <Rating className="m-3 " height="5px" value={5} readOnly cancel={false} />
                    <p className="text-base text-black">
                        The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.
                    </p>
                    <div className="mt-5">
                        <button className="text-white font-bold bg-green-600 p-2 m-2 rounded-lg shadow-lg shadow-green-500 hover:bg-white hover:outline-double hover:outline-2 hover:outline-green-600 hover:text-green-600 hover:shadow-white">
                            Add To Cart
                            <i className="fa-solid fa-cart-shopping px-2"></i>
                        </button>
                        <button className="text-green-600 font-bold outline-double outline-green-600 outline-2 p-2 m-2 rounded-lg shadow-lg shadow-green-500 hover:bg-green-600 hover:outline-none hover:text-white hover:shadow-white">
                            WishList
                            <i className="fa-solid fa-heart px-2"></i>
                        </button>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                        <div className="mt-4">
                            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>
                                <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>
                                <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
                                <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>

                            </ul>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-black font-bold text-xl">Delivery Information</h3>
                        <div className="grid grid-cols-2">
                            <div className="col-span-1  m-2">
                                <h3 className="text-sm font-medium text-gray-900">Shipping</h3>
                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm text-gray-600" >
                                        <li>Free shipping on orders over $300</li>
                                        <li>International shipping available</li>
                                        <li>Expedited shipping options</li>
                                        <li>Signature required upon delivery</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-1  m-2">
                                <h3 className="text-sm font-medium text-gray-900">Return Policy</h3>
                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm text-gray-600">
                                        <li>Easy return requests</li>
                                        <li>Pre-paid shipping label included</li>
                                        <li>10% restocking fee for returns</li>
                                        <li>60 day return window</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-8 my-5">
                    <hr />
                    <h2 className="text-gray-900 font-bold text-3xl my-2">More Products By Seller</h2>
                    <hr />
                    <div className="grid grid-cols-4">
                        { 
                        moreProducts?.map(
                            (product:Product)=>(
                                <div className="col-span-1" key={product._id}>
                                    <Products product = {product} />
                                </div>
                            )
                        )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}