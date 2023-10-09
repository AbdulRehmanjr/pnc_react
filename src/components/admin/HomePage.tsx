
import { Chart } from 'primereact/chart';
import { useEffect, useState } from 'react';


const UpperPortion = () => {
    return (
        <div className="grid grid-cols-4 gap-3">
            <div className={`col-span-4 md:col-span-1 grid grid-cols-3 bg-[#D1E9FC] rounded-lg h-fit shadow-lg shadow-[#E0FFE0] cursor-pointer`}>
                <div className="col-span-2  text-black  font-bold font-serif p-4">
                    <p className="text-4xl">User</p>
                    <p className="text-xl text-gray-500">10000</p>
                </div>
                <div className="col-span-1 text-6xl md:text-4xl p-6 text-[#B8D1EF] drop-shadow-xl ">
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>
            <div className={`col-span-4 md:col-span-1 grid grid-cols-3 bg-[#D0F2FE] rounded-lg h-fit shadow-lg shadow-[#F5F5F5] cursor-pointer`}>
                <div className="col-span-2 text-black  font-bold font-serif p-4">
                    <p className="text-4xl">Seller</p>
                    <p className="text-xl text-gray-500">10000</p>
                </div>
                <div className="col-span-1 text-6xl md:text-4xl p-6 text-[#0C53B7] drop-shadow-xl">
                    <i className="fa-solid fa-people-line"></i>
                </div>
            </div>
            <div className={`col-span-4 md:col-span-1 grid grid-cols-3 bg-[#FFF7CC] rounded-lg h-fit shadow-lg shadow-[#FFF3E0] cursor-pointer`}>
                <div className="col-span-2 text-black  font-bold font-serif p-4">
                    <p className="text-4xl">Revenue</p>
                    <p className="text-xl text-gray-500">40000</p>
                </div>
                <div className="col-span-1 text-6xl md:text-4xl p-6 text-[#B78104] drop-shadow-xl">
                    <i className="fa-solid fa-sack-dollar"></i>
                </div>
            </div>
            <div className={`col-span-4 md:col-span-1 grid grid-cols-3 bg-[#FFE7D9] rounded-lg h-fit shadow-lg shadow-[#E6F7FF] cursor-pointer`}>
                <div className="col-span-2 text-black  font-bold font-serif p-4">
                    <p className="text-4xl">Monthly</p>
                    <p className="text-xl text-geay-500">10000</p>
                </div>
                <div className="col-span-1 text-6xl md:text-4xl p-6 text-[#B72135] drop-shadow-xl">
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

    const dataSub = {
        labels: ['STALL', 'BAZAAR', 'ELITE'],
        datasets: [
            {
                label: 'Subscriptions',
                data: [300, 100, 10],
                backgroundColor: [
                    '#B3C6FF',
                    '#94FF94',
                    '#FFFFB3',
                ],
                borderColor: [
                    '#3366FF',
                    '#66FF66',
                    '#FFFF66',
                ],
                borderWidth: 1
            }
        ]
    };
    const optionSub = {
        scales: {
            y: {
                beginAtZero: true,
            }
        }

    };
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

    useEffect(() => {


        setChartData(data);
        setChartOptions(options);



        setSubData(dataSub)
        setSubOPtions(optionSub)
    }, []);
    return (
        <>
            <UpperPortion />
            <div className="grid grid-cols-7 gap-5 my-[20px]">
                <div className="col-span-7 md:col-span-2  bg-green-200  rounded-lg h-fit shadow-lg shadow-[#F3F4F6] cursor-pointer py-4">
                    <p className="text-gray-500 font-bold font-serif text-2xl p-4 my-1">User Status</p>
                    <Chart className="p-1" type="doughnut" data={chartData} options={chartOptions} />
                </div>
                <div className="col-span-7 md:col-span-5 requests bg-green-200 rounded-lg h-fit  shadow-lg shadow-[#F3F4F6] cursor-pointer p-5">
                    <p className="text-gray-500 font-bold font-serif text-2xl py-2 px-4 my-2">Subscription Status</p>
                    <div className="h-[50vh]">
                        <Chart type="bar" data={subData} options={subOptions} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </div>

                </div>
            </div>
        </>
    )
}


export default HomePage