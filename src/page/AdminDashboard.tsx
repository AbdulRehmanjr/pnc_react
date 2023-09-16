
import { Link } from 'react-router-dom'
import AdminRoutes from '../routes/AdminRoutes'
import style from './AdminDashboard.module.css'

const AdminDashboard = () => {

    return (
        <section className={`grid grid-cols-12 relative ${style.h_custom}`}>
            <aside className={`col-span-2 p-2 bg-gray-300 h-full`}>
                <div className="sticky top-0">
                <div className="flex flex-row">
                    <img src="/pnc.png" alt="logo" width="50" height="50" />
                    <h1 className="text-center text-black text-lg font-['Karmatic'] underline underline-offset-[10px]  decoration-[5px] decoration-white p-3">Dashboard</h1>
                </div>
                <div className="list-container">
                    <ul className="list-none my-[20px] font-serif">
                        <li className="flex flex-row p-2 my-2 cursor-pointer hover:bg-white hover:rounded-lg">
                            <img className="h-[25px] w-[25px]" src="/admin/home.png" alt="icon" />
                            <span className="px-4  text-black text-[15px]">Home</span>
                        </li>
                        <Link to="/admin-dashboard/seller-request" className="flex flex-row p-2 my-2 cursor-pointer hover:bg-white hover:rounded-lg">
                            <img className="h-[25px] w-[25px]" src="/admin/mail.png" alt="icon" />
                            <span className="px-4  text-black text-[15px]">Requests</span>
                        </Link>
                        <Link to="/admin-dashboard/category" className="flex flex-row p-2 my-2 cursor-pointer hover:bg-white hover:rounded-lg">
                            <img className="h-[25px] w-[25px]" src="/admin/category.png" alt="icon" />
                            <span className="px-4  text-black text-[15px]">Categories</span>
                        </Link>
                        <li className="flex flex-row p-2 my-2 cursor-pointer hover:bg-white hover:rounded-lg">
                            <img className="h-[25px] w-[25px]" src="/admin/seller.png" alt="icon" />
                            <span className="px-4  text-black text-[15px]">Reports</span>
                        </li>
                    </ul>
                </div>
                </div>
            </aside>
            <main className="col-span-10 p-2 h-full">
                <AdminRoutes />
            </main>
        </section>
    )
}

export default AdminDashboard