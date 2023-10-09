import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllProducts, getProductById } from "../../services/inventory/ProductService";

import { TabView, TabPanel } from 'primereact/tabview';
import { Avatar } from 'primereact/avatar';

import { Rating } from "primereact/rating";
import { Product } from "../../class/inventory/Product";
import { Products } from "./Product";
import { Paginator } from "primereact/paginator";

interface Item {
    id: number
    detail: string
    image: string
    alt: string
}
const ListItem = ({ data }: { data: Item }) => {
    return (
        <li className="flex"><img src={data.image} alt={data.alt} /><span className="p-4">{data.detail}</span></li>
    )
}

export const ProductDetail = () => {

    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState<Product>()
    const [moreProducts, setMoreProducts] = useState<Product[]>()
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(3);
   const [reviews,_setReviews] =useState<[]>()
  
    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
      };
    
      //const pagedReviews:Product[] = reviews?.slice(first, first + rows);

    const shipping: Item[] = [
        {
            id: 1,
            detail: 'Free shipping on orders over $300',
            image: '/icons/shipping.png',
            alt: 'shipping'
        },
        {
            id: 2,
            detail: 'International shipping available',
            image: '/icons/international.png',
            alt: 'international'
        }, {
            id: 3,
            detail: 'Expedited shipping options',
            image: '/icons/fast-delivery.png',
            alt: 'fast-delivery'
        }, {
            id: 4,
            detail: 'Signature required upon delivery',
            image: '/icons/sign.png',
            alt: 'signature'
        },
    ]
    const returnPolicy: Item[] = [
        {
            id: 1,
            detail: 'Easy return requests',
            image: '/icons/return.png',
            alt: 'return'
        },
        {
            id: 2,
            detail: 'Pre-paid shipping label included',
            image: '/icons/barcode.png',
            alt: 'barcode'
        }, {
            id: 3,
            detail: '10% restocking fee for returns',
            image: '/icons/percentage.png',
            alt: 'percentage'
        }, {
            id: 4,
            detail: '7 day return window',
            image: '/icons/calendar.png',
            alt: 'calendar'
        },
    ]

    //* get single product detail and products of same seller
    useEffect(() => {
        getProductById(searchParams.get('productId'))
            .then(response => setProduct(response['data']))
            .catch(error => console.log(error))
        getAllProducts()
            .then(response => setMoreProducts(response['data']))
            .catch(error => console.log(error))
    }, [])

    return (
        <section className="col-span-8 my-2">
            <div className="grid grid-cols-8 m-2">
                <div className="col-span-8 md:col-span-3 p-4">
                    <img className="rounded-lg shadow-lg w-full h-[420px]" src={product?.imageSrc} alt="Image" />
                </div>
                <div className="col-span-8 md:col-span-5 font-sans font-bold p-2 ">
                    <h2 className="text-5xl md:text-4xl  text-black">{product?.name}</h2>
                    <div className="text-base text-black py-3 md:p-3">
                        <p>Category: <span className="text-sm text-gray-600">Custom</span></p>
                        <p>Code: <span className="text-sm text-gray-600">ERGTUH1232</span></p>
                        <p className="text-2xl text-gray-600 my-3"><span className="text-black">Price: </span> ${product?.price}</p>
                        <div className="flex"><Rating className="py-1" height="5px" value={5} readOnly cancel={false} /><p className="text-gray-400 mx-1 px-1">(Reviews)</p></div>
                    </div>
                    <hr />
                    <h3 className="text-3xl md:text-2xl font-bold font-sans text-gray-900 my-2">Description</h3>

                    <p className="text-base font-light text-black font-sans text-justify">
                        The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.
                    </p>
                    <div className="mt-5 text-white">
                        <button className="bg-green-500 text-base font-serif font-bold  rounded-sm shadow-lg  p-2">
                            <i className="fa-solid fa-cart-shopping px-2"></i>  Add To Cart
                        </button>
                        <button className="bg-red-400 text-base font-serif font-bold rounded-sm shadow-lg p-2 mx-2">
                            
                            <i className="fa-solid fa-heart px-2"></i>WishList
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
                </div>
                <div className="col-span-8">
                    <TabView>
                        <TabPanel header="Reviews">
                            <div className="grid grid-cols-3">
                                <div className="col-span-3 md:col-span-1 my-1 py-1">
                                    <div className="flex">
                                        <p className="text-[50px] text-forest-green font-serif font-extrabold">5.0</p>
                                        <div className="flex flex-col text-black font-serif p-4">
                                            <p>Average Rating</p>
                                            <Rating className="p-1" height="5px" value={5} readOnly cancel={false} />
                                        </div>
                                    </div>
                                    <div className="flex"><Rating className="p-1" height="5px" value={5} readOnly cancel={false} /><span className="px-3">5</span></div>
                                    <div className="flex"><Rating className="p-1" height="5px" value={4} readOnly cancel={false} /><span className="px-3">4</span></div>
                                    <div className="flex"><Rating className="p-1" height="5px" value={3} readOnly cancel={false} /><span className="px-3">3</span></div>
                                    <div className="flex"><Rating className="p-1" height="5px" value={2} readOnly cancel={false} /><span className="px-3">0</span></div>
                                    <div className="flex"><Rating className="p-1" height="5px" value={1} readOnly cancel={false} /><span className="px-3">1</span></div>
                                </div>
                                <div className="col-span-3 md:col-span-2 my-1 py-1">
                                    <h2 className="text-black text-xl font-serif font-extrabold">Submit Your Review</h2>
                                    <div className="flex"><span>Submit your Rating :</span> <Rating className="p-1 mx-2" height="5px" value={4} onChange={(e) => e.value} cancel={false} /></div>
                                    <form className="my-2 py-2">
                                        <textarea className="border-2 hover:border-gray-300" name="review" id="review" cols={30} rows={5} placeholder="Write your review"></textarea>
                                        <div className="text-white font-sans text-base my-2">
                                            <button className="bg-forest-green rounded-sm shadow-md p-2">Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-span-3">
                                    <h1 className="text-2xl text-black font-serif">Reviews</h1>
                                    <hr />
                                    <div className="flex gap-2 m-2 p-2">
                                        <Avatar className="px-2" icon="fas fa-user" size="xlarge" shape="circle" />
                                        <div className="text-black text-base  font-serif">
                                            <p className="font-extrabold">User Name</p>
                                            <Rating value={5} readOnly cancel={false} />
                                            <p className="py-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, vero doloremque. Neque, saepe. Repudiandae iste doloribus optio quae, ullam sequi?</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                <Paginator first={first} rows={rows} totalRecords={reviews?.length} rowsPerPageOptions={[3, 6, 9]} onPageChange={onPageChange} />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Delivery Information">
                            <div className="grid grid-cols-2">
                                <div className="col-span-2 md:col-span-1  m-2">
                                    <h3 className="text-xl font-bold text-gray-900">Shipping</h3>
                                    <div className="mt-4">
                                        <ul role="list" className="list-none space-y-2 pl-4 text-base text-gray-600" >
                                            {shipping.map(
                                                item => <ListItem data={item} key={item.id} />
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-span-2 md:col-span-1  m-2">
                                    <h3 className="text-xl font-bold text-gray-900">Return Policy</h3>
                                    <div className="mt-4">
                                        <ul role="list" className="list-none space-y-2 pl-4 text-base text-gray-600" >
                                            {returnPolicy.map(
                                                item => <ListItem data={item} key={item.id} />
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Header III">
                            <p className="m-0">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                            </p>
                        </TabPanel>
                    </TabView>
                </div>
                <div className="col-span-8 my-5">
                    <hr />
                    <h2 className="text-gray-900 font-bold text-3xl my-2">More Products By Seller</h2>
                    <hr />
                    <div className="grid grid-cols-4">
                        {
                            moreProducts?.map(
                                (product: Product) => (
                                        <Products product={product} key={product._id} /> 
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}