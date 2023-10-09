
import { Link } from 'react-router-dom'
import AdminRoutes from '../routes/AdminRoutes'


const AdminDashboard = () => {

    return (
        <section className="grid grid-cols-12 h-full bg-[#F5F7FB]">
            <aside className="hidden md:grid md:col-span-2 p-2 bg-[#F9FAFB] h-full border-r-2 border-white">
                <div className="sticky top-[80px]">
                <div className="flex flex-row my-5">
                    <img src="/pnc.png" alt="logo" width="50" height="50" />
                    <h1 className="text-center text-black text-2xl font-serif underline underline-offset-[10px]  decoration-[2px] decoration-white p-3">Dashboard</h1>
                </div>
                <div className="list-container">
                    <ul className="list-none my-[20px] font-serif">
                        <Link to="/admin-dashboard" className="flex flex-row p-2 my-2 cursor-pointer hover:bg-white hover:rounded-lg">
                            <img className="h-[25px] w-[25px]" src="/admin/home.png" alt="icon" />
                            <span className="px-4  text-black text-[15px]">Home</span>
                        </Link>
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
            <main className="col-span-12 md:col-span-10 h-screen">
                <AdminRoutes />
            </main>
        </section>
    )
}

export default AdminDashboard