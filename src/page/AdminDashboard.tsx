
import style from './AdminDashboard.module.css'

const AdminDashboard = () => {

    return (
        <div className={`grid grid-cols-12  ${style.h_custom}`}>
            <aside className={`col-span-2 p-2 bg-gray-300`}>
                <div className="flex flex-row">
                    <img src="src/assets/pnc.png" alt="logo" width="50" height="50" />
                    <h1 className="text-center text-black text-sm font-['Cyborg'] underline underline-offset-[10px]  decoration-[5px] decoration-white p-3">Dashboard</h1>
                </div>
                <div className="list-container">
                    <ul className="list-none my-[20px]">
                        <li className="flex flex-row p-2 cursor-pointer">
                            <img className="h-[25px] w-[25px]" src="src/assets/admin/home.png" alt="icon" />
                            <span className="px-4 py-2 text-black font-['Cyborg'] text-[10px]">Home</span>
                        </li>
                        <li className="flex flex-row p-2 cursor-pointer">
                            <img className="h-[25px] w-[25px]" src="src/assets/admin/mail.png" alt="icon" />
                            <span className="px-4 py-2 text-black font-['Cyborg'] text-[10px]">Requests</span>
                        </li>
                        <li className="flex flex-row p-2 cursor-pointer">
                            <img className="h-[25px] w-[25px]" src="src/assets/admin/category.png" alt="icon" />
                            <span className="px-4 py-2 text-black font-['Cyborg'] text-[10px]">Categories</span>
                        </li>
                        <li className="flex flex-row p-2 cursor-pointer">
                            <img className="h-[25px] w-[25px]" src="src/assets/admin/seller.png" alt="icon" />
                            <span className="px-4 py-2 text-black font-['Cyborg'] text-[10px]">Reports</span>
                        </li>
                    </ul>
                </div>
            </aside>
            <main className="col-span-10 p-2">
                <h1>main</h1>
            </main>
        </div>
    )
}

export default AdminDashboard