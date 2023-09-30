import { Link } from "react-router-dom"
import SellerRoutes from "../routes/SellerRoutes"

export const SellerDashboard = () => {
    return (
        <main className="grid grid-cols-12 bg-green-200 h-[calc(100%-74.5px)]">
            <div className="col-span-1 bg-gray-200 p-3">
                <div className="sticky top-[70px]">
                    <img src="/vite.svg" alt="logo" />
                    <ul className="list-none text-xl my-2 ">
                        <li className="bg-slate-50 text-center rounded-xl p-2 m-1">
                            <Link to="/seller-dashboard" >
                                <i className="fa-solid fa-house"></i>
                            </Link>

                        </li>
                        <li className="bg-slate-50 text-center rounded-xl p-2 m-1">
                            <Link to="communication">
                                <i className="fa-solid fa-message"></i>
                            </Link>
                        </li>
                        <li className="bg-slate-50 text-center rounded-xl p-2 m-1">
                            <Link to="products">
                                <i className="fa-solid fa-warehouse"></i>
                            </Link>
                        </li>
                        <li className="bg-slate-50 text-center rounded-xl p-2 m-1">
                            <Link to="">
                                <i className="fa-solid fa-truck-fast"></i>
                            </Link>
                        </li>
                        <li className="bg-slate-50 text-center rounded-xl p-2 m-1">
                            <Link to="">
                                <i className="fa-solid fa-gear"></i>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="col-span-11">
                <SellerRoutes />
            </div>
        </main>
    )
}

