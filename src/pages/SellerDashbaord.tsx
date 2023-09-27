import SellerRoutes from "../routes/SellerRoutes"

export const SellerDashboard = ()=>{
    return (
        <main className="grid grid-cols-12 bg-green-200 h-screen">
            <div className="col-span-1 bg-gray-200 p-3">
                <div className="sticky top-[70px]">
                <img src="/vite.svg" alt="logo" />
                <ul className="list-none text-xl my-2 ">
                    <li className="bg-slate-50 text-center rounded-xl p-2 m-1"><i className="fa-solid fa-house"></i></li>
                    <li className="bg-slate-50 text-center rounded-xl p-2 m-1"><i className="fa-solid fa-message"></i></li>
                    <li className="bg-slate-50 text-center rounded-xl p-2 m-1"><i className="fa-solid fa-warehouse"></i></li>
                    <li className="bg-slate-50 text-center rounded-xl p-2 m-1"><i className="fa-solid fa-truck-fast"></i></li>
                    <li className="bg-slate-50 text-center rounded-xl p-2 m-1"><i className="fa-solid fa-gear"></i></li>
                </ul>
                </div>
                
            </div>
            <div className="col-span-11">
                <SellerRoutes />
            </div>
        </main>
    )
}

