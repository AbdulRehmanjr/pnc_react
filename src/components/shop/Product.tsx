
export const Products = ({ product }) => {
  return (
    <div className=" bg-slate-200 m-1">
      <img className="w-full h-[250px] p-3" src={product.imageSrc} alt="Image" loading="lazy" />
      <div className="flex flex-row justify-between px-3">
        <p className="text-lg font-bold font-serif">{product.name}</p>
        <p className="text-md font-bold font-serif">{product.price}</p>
      </div>
      <div className="flex flex-row justify-between px-3 text-lg font-medium font-serif">
        <button className="bg-slate-300 p-2 m-2 rounded-lg">
          <i className="fa-solid fa-cart-shopping px-1"></i>
        </button>
        <button className="bg-slate-300 p-2 m-2 rounded-lg">
          <i className="fa-solid fa-heart"></i>
        </button>
        <button className="bg-slate-300 p-2 m-2 rounded-lg">
          Detail
        </button>
      </div>
    </div>
  )
}
