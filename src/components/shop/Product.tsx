import { Rating } from "primereact/rating"
import { Link } from "react-router-dom"
import { addToCart } from "../../services/order/CartService"

export const Products = ({ product }) => {
  return (
    <div className="col-span-4 md:col-span-1 bg-green-200 m-1">
      <img className="w-full h-[350px] md:h-[250px]  p-4 md:p-3 " src={product?.imageSrc} alt="Image" loading="lazy" />
      <div className="flex flex-row justify-between px-3">
        <p className="text-2xl md:text-lg font-bold font-serif">{product?.name}</p>
        <p className="text-xl md:text-md font-bold font-serif">{product?.price}</p>
      </div>
      <div className="flex px-1 py-3"><span className="mx-2 text-gray-600">Reviews: </span>  <Rating value={5} readOnly cancel={false} /></div>
      <div className="grid grid-cols-2 font-bold font-sans md:text-sm">
        <button className="col-span-2 bg-forest-green text-white  p-2 m-3 rounded-md shadow-md" onClick={() => addToCart(product)}>
          <i className="fa-solid fa-cart-shopping px-1"></i> Add to Cart
        </button>
        <button className="col-span-1 bg-green-300 p-2 m-2 rounded-md shadow-md">
          <i className="fa-solid fa-heart px-1"></i> WishList
        </button>
        <Link to={`/shop/product-detail?productId=${product?._id}`} className="col-span-1 text-center bg-green-100 p-2 m-2 rounded-md shadow-md">
          <i className="fa-solid fa-circle-info px-1"></i> Detail
        </Link>
      </div>

    </div>
  )
}
