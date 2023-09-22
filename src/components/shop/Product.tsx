import { Rating } from "primereact/rating"
import { Link } from "react-router-dom"
import { addToCart } from "../../services/order/CartService"

export const Products = ({ product }) => {
  return (
    <div className="col-span-1 bg-slate-200 m-1">
      <img className="w-full h-[250px] p-3" src={product?.imageSrc} alt="Image" loading="lazy" />
      <div className="flex flex-row justify-between px-3">
        <p className="text-lg font-bold font-serif">{product?.name}</p>
        <p className="text-md font-bold font-serif">{product?.price}</p>
      </div>
      <Rating className="m-3 text-green-500" height="5px" value={5} readOnly cancel={false} />
      <div className="flex flex-row justify-between px-3 text-lg font-medium font-serif">
        <button className="bg-slate-300 p-2 m-2 rounded-lg" onClick={()=>addToCart(product)}>
          <i className="fa-solid fa-cart-shopping px-1"></i>
        </button>
        <button className="bg-slate-300 p-2 m-2 rounded-lg">
          <i className="fa-solid fa-heart"></i>
        </button>
        <Link to={`/shop/product-detail?productId=${product?._id}`} className="bg-slate-300 p-2 m-2 rounded-lg" >
          Detail
        </Link>
      </div>
    </div>
  )
}
