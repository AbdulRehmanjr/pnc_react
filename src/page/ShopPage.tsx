import ShopRoutes from '../routes/ShopRoutes'


const ShopPage = () => {

  return (
    <div className="bg-white">
      <div className="grid grid-cols-8">
        <div className="col-span-8 bg-[url('/shop/banner.jpg')] bg-cover bg-center bg-no-repeat h-[250px]">
          <h1 className="text-white text-4xl md:text-7xl font-bold font-serif p-20">Let Do Shopping</h1>
        </div>
          <ShopRoutes />
      </div>

    </div >
  )
}

export default ShopPage