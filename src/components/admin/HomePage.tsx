

const HomePage = () => {


    return (
        <>
            <div className="grid grid-cols-4 gap-3">
                <div className={`grid grid-cols-3 bg-[#E0FFE0] rounded-lg h-[100px] shadow-lg shadow-[#E0FFE0] cursor-pointer`}>
                    <div className="col-span-3 md:col-span-2 text-black  font-bold font-serif p-4">
                        <p className="text-3xl">User</p>
                        <p>10000</p>
                    </div>
                    <div className="col-span-1 text-4xl p-6 text-black drop-shadow-xl">
                        <i className="fa-solid fa-user"></i>
                    </div>
                </div>
                <div className={`grid grid-cols-3 bg-[#F5F5F5] rounded-lg h-[100px] shadow-lg shadow-[#F5F5F5] cursor-pointer`}>
                    <div className="col-span-3 md:col-span-2 text-black  font-bold font-serif p-4">
                        <p className="text-3xl">Seller</p>
                        <p>10000</p>
                    </div>
                    <div className="col-span-1 text-4xl p-6 text-black drop-shadow-xl">
                        <i className="fa-solid fa-people-line"></i>
                    </div>
                </div>
                <div className={`grid grid-cols-3 bg-[#FFF3E0] rounded-lg h-[100px] shadow-lg shadow-[#FFF3E0] cursor-pointer`}>
                    <div className="col-span-3 md:col-span-2 text-black  font-bold font-serif p-4">
                        <p className="text-3xl">Revenue</p>
                        <p>40000</p>
                    </div>
                    <div className="col-span-1 text-4xl p-6 text-black drop-shadow-xl">
                        <i className="fa-solid fa-sack-dollar"></i>
                    </div>
                </div>
                <div className={`grid grid-cols-3 bg-[#E6F7FF] rounded-lg h-[100px] shadow-lg shadow-[#E6F7FF] cursor-pointer`}>
                    <div className="col-span-3 md:col-span-2 text-black  font-bold font-serif p-4">
                        <p className="text-3xl">Monthly</p>
                        <p>10000</p>
                    </div>
                    <div className="col-span-1 text-4xl p-6 text-black drop-shadow-xl">
                        <i className="fa-solid fa-coins"></i>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-5 my-[20px]">
                <div className={`col-span-3 grid grid-cols-3 bg-[#F3F4F6] rounded-lg h-[210px]  shadow-lg shadow-[#F3F4F6] cursor-pointer`}>
                    <div className="col-span-2 text-[#009688] font-bold font-serif p-4">
                        <p className="text-3xl underline underline-offset-8  decoration-black decoration-4 my-2">Seller Requests</p>
                        <ul className="list-none text-md">
                            <li className="py-1 px-2 text-green-600"><i className="fa-solid fa-circle-check px-2"></i>Accept</li>
                            <li className="py-1 px-2 text-red-600"><i className="fa-solid fa-circle-xmark px-2"></i>Reject</li>
                            <li className="py-1 px-2 text-yellow-600"><i className="fa-solid fa-arrow-rotate-left px-2"></i>Review</li>
                            <li className="py-1 px-2 text-gray-800"><i className="fa-solid fa-hourglass-half px-2"></i>Pending</li>
                        </ul>
                    </div>
                    <div className="col-span-1 text-[100px] p-6 text-[#009688] drop-shadow-xl">
                        <i className="fa-solid fa-envelope-open-text"></i>
                    </div>
                </div>
                <div className={`col-span-2 grid grid-cols-3 bg-[#F3F4F6] rounded-lg h-[210px]  shadow-lg shadow-[#F3F4F6] cursor-pointer`}>
                    <div className="col-span-2 text-[#009688] font-bold font-serif p-4">
                        <p className="text-2xl underline underline-offset-8  decoration-black decoration-4 my-2">Categories</p>
                        <p></p>
                    </div>
                    <div className="col-span-1 text-[65px] py-[55px] px-1 text-[#009688] drop-shadow-xl">
                        <i className="fa-solid fa-shapes"></i>
                    </div>
                </div>
           
            </div>
        </>
    )
}

export default HomePage