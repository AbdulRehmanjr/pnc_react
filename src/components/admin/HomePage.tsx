
import { Chart } from 'primereact/chart';
import { useEffect, useState } from 'react';


const UpperPortion = () => {
    return (
        <div className="grid grid-cols-4 gap-3">
            <div className={`col-span-4 md:col-span-1 grid grid-cols-3 bg-[#E0FFE0] rounded-lg h-[100px] shadow-lg shadow-[#E0FFE0] cursor-pointer`}>
                <div className="col-span-2  text-black  font-bold font-serif p-4">
                    <p className="text-3xl">User</p>
                    <p>10000</p>
                </div>
                <div className="col-span-1 text-4xl p-6 text-black drop-shadow-xl">
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>
            <div className={`col-span-4 md:col-span-1 grid grid-cols-3 bg-[#F5F5F5] rounded-lg h-[100px] shadow-lg shadow-[#F5F5F5] cursor-pointer`}>
                <div className="col-span-2 text-black  font-bold font-serif p-4">
                    <p className="text-3xl">Seller</p>
                    <p>10000</p>
                </div>
                <div className="col-span-1 text-4xl p-6 text-black drop-shadow-xl">
                    <i className="fa-solid fa-people-line"></i>
                </div>
            </div>
            <div className={`col-span-4 md:col-span-1 grid grid-cols-3 bg-[#FFF3E0] rounded-lg h-[100px] shadow-lg shadow-[#FFF3E0] cursor-pointer`}>
                <div className="col-span-2 text-black  font-bold font-serif p-4">
                    <p className="text-3xl">Revenue</p>
                    <p>40000</p>
                </div>
                <div className="col-span-1 text-4xl p-6 text-black drop-shadow-xl">
                    <i className="fa-solid fa-sack-dollar"></i>
                </div>
            </div>
            <div className={`col-span-4 md:col-span-1 grid grid-cols-3 bg-[#E6F7FF] rounded-lg h-[100px] shadow-lg shadow-[#E6F7FF] cursor-pointer`}>
                <div className="col-span-2 text-black  font-bold font-serif p-4">
                    <p className="text-3xl">Monthly</p>
                    <p>10000</p>
                </div>
                <div className="col-span-1 text-4xl p-6 text-black drop-shadow-xl">
                    <i className="fa-solid fa-coins"></i>
                </div>
            </div>
        </div>
    )
}


const HomePage = () => {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [subData, setSubData] = useState({});
    const [subOptions, setSubOPtions] = useState({});
    


    useEffect(() => {

        const data = {
            labels: ['Sellers', 'Users'],
            datasets: [
                {
                    data: [300, 150],
                    backgroundColor: [
                        '#93FF93',
                        '#FFB567'

                    ],
                    hoverBackgroundColor: [
                        '#B3FFB3',
                        '#FFC68C',
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);

        const subData = {
            labels: ['STALL', 'BAZAAR','ELITE'],
            datasets: [
                {
                    data: [300, 100,10],
                    backgroundColor: [
                        '#3366FF',
                        '#66FF66',
                        '#FFFF66',
                    ],
                    hoverBackgroundColor: [
                        '#3366FF',
                        '#66FF66',
                        '#FFFF66',
                    ]
                }
            ]
        };
        const subOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }

        };

        setSubData(subData)
        setSubOPtions(subOptions)
    }, []);
    return (
        <>
            <UpperPortion />
            <div className="grid grid-cols-7 gap-5 my-[20px]">
                <div className={`col-span-7 md:col-span-3 grid grid-cols-3 bg-[#F3F4F6] rounded-lg h-[210px]  shadow-lg shadow-[#F3F4F6] cursor-pointer`}>
                    <div className="col-span-2 text-[#009688] font-bold font-serif p-4">
                        <p className="text-3xl   my-2">Seller Requests</p>
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
                <div className={`col-span-7 md:col-span-2 grid grid-cols-3 bg-[#F3F4F6] rounded-lg h-[210px]  shadow-lg shadow-[#F3F4F6] cursor-pointer`}>
                    <div className="col-span-2 text-[#009688] font-bold font-serif p-4">
                        <p className="text-2xl my-2">Categories</p>
                        <ul className="list-none text-md text-black">
                            <li className="py-1 px-2 "><i className="fa-solid fa-house px-2"></i>Home Service</li>
                            <li className="py-1 px-2 "><i className="fa-solid fa-utensils px-2"></i>Resturants</li>
                            <li className="py-1 px-2 "><i className="fa-solid fa-car px-2"></i>Auto Mobile</li>

                        </ul>
                    </div>
                    <div className="col-span-1 text-[65px] py-[55px] px-1 text-[#009688] drop-shadow-xl">
                        <i className="fa-solid fa-shapes"></i>
                    </div>
                </div>
                <div className="col-span-7 md:col-span-2  bg-[#F3F4F6] rounded-lg h-fit shadow-lg shadow-[#F3F4F6] cursor-pointer">
                    <p className="text-[#009688] font-bold font-serif text-sm   p-4 my-1">User Status</p>
                    <Chart className="px-10" height="210px" type="doughnut" data={chartData} options={chartOptions} />
                </div>
            </div>
            <div className="grid grid-cols-5 gap-5 my-[20px]">
                <div className="col-span-5 md:col-span-2 requests bg-[#F3F4F6] rounded-lg h-fit  shadow-lg shadow-[#F3F4F6] cursor-pointer p-5">
                    <p className="text-[#009688] font-bold font-serif text-2xl py-2 px-4 my-2">Subscription Status</p>
                    <Chart className="px-10" height="250px" type="pie" data={subData} options={subOptions} />
                </div>
            </div>
        </>
    )
}

export default HomePage