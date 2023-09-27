

const Cards = () => (
    <>
        <div className="col-span-4 md:col-span-1">
            <div className="grid grid-cols-3 bg-orange-400 rounded-lg p-2">
                <div className="col-span-2  text-white  font-bold font-serif p-4">
                    <p className="text-3xl">Products</p>
                    <p className="text-xl ">20</p>
                </div>
                <div className="col-span-1 text-6xl md:text-4xl p-6 text-white drop-shadow-xl ">
                    <i className="fa-brands fa-product-hunt"></i>
                </div>
            </div>
        </div>
        <div className="col-span-4 md:col-span-1 ">
            <div className="grid grid-cols-3 bg-green-400 rounded-lg p-2">
                <div className="col-span-2  text-white  font-bold font-serif p-4">
                    <p className="text-3xl">Orders</p>
                    <p className="text-xl ">20</p>
                </div>
                <div className="col-span-1 text-6xl md:text-4xl p-6 text-white drop-shadow-xl ">
                    <i className="fa-solid fa-dolly"></i>
                </div>
            </div>
        </div>
        <div className="col-span-4 md:col-span-1 ">
            <div className="grid grid-cols-3 bg-red-400 rounded-lg p-2">
                <div className="col-span-2  text-white  font-bold font-serif p-4">
                    <p className="text-3xl">Revenue</p>
                    <p className="text-xl ">20</p>
                </div>
                <div className="col-span-1 text-6xl md:text-4xl p-6 text-white drop-shadow-xl ">
                    <i className="fa-solid fa-sack-dollar"></i>
                </div>
            </div>
        </div>
        <div className="col-span-4 md:col-span-1 ">
            <div className="grid grid-cols-3 bg-yellow-400 rounded-lg p-2">
                <div className="col-span-2  text-white  font-bold font-serif p-4">
                    <p className="text-3xl">Wallet</p>
                    <p className="text-xl ">20</p>
                </div>
                <div className="col-span-1 text-6xl md:text-4xl p-6 text-white drop-shadow-xl ">
                    <i className="fa-solid fa-wallet"></i>
                </div>
            </div>

        </div>
    </>

)

export const HomePage = () => {
    return (
        <div className="grid grid-cols-4 gap-3 p-4">
            <Cards />
        </div>

    )
}