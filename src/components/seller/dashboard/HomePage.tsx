import { Chart } from "primereact/chart"
import { useEffect, useState } from "react"


const Cards = () => (
    <>
        <div className="col-span-4 md:col-span-1">
            <div className="grid grid-cols-3 bg-orange-400/70 rounded-lg p-2">
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
            <div className="grid grid-cols-3 bg-green-400/70 rounded-lg p-2">
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
            <div className="grid grid-cols-3 bg-red-400/70 rounded-lg p-2">
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
            <div className="grid grid-cols-3 bg-yellow-400/70 rounded-lg p-2">
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

type ChartData = {
    chartData: object
    chartOptions: object
}
export const HomePage = () => {
    const [chartData, setChartData] = useState<ChartData>();

    useEffect(() => {
        const data: ChartData = {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Orders',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#000000',
                        tension: 0.4
                    }
                ]
            },
            chartOptions: {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: '#000000'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#000000'
                        },
                        grid: {
                            color: '#000000'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#000000'
                        },
                        grid: {
                            color: '#000000'
                        }
                    }
                }
            }
        }

        setChartData(data)
    }, [])
    return (
        <div className="grid grid-cols-4 gap-3 p-4">
            <Cards />
            <div className="col-span-3 bg-slate-100 p-4 rounded-lg ">
                <div className="h-[70vh]">
                    <Chart type="line" data={chartData?.chartData} options={chartData?.chartOptions} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
            </div>
            <div className="col-span-1 bg-slate-50 p-2 rouned-md">
                <h1 className="text-2xl font-serif ">Order Status</h1>
                <div className="bg-slate-200 flex flex-row p-2 rounded-lg my-3">
                    <img className="drop-shadow-xl" src="/icons/delivered.png" alt="icon" width={50} height={50} loading="lazy"/>
                    <div className="font-serif font-bold mx-3">
                        <p className="text-xl">Delivered</p>
                        <p className="text-base">20</p>
                    </div>
                </div>
                <div className="bg-slate-200 flex flex-row p-2 rounded-lg my-3">
                    <img src="/icons/pending.png" alt="icon" width={50} height={50} loading="lazy"/>
                    <div className="font-serif font-bold mx-3">
                        <p className="text-xl">Pending</p>
                        <p className="text-base">5</p>
                    </div>
                </div>
                <div className="bg-slate-200 flex flex-row p-2 rounded-lg my-3">
                    <img src="/icons/cancel.png" alt="icon" width={50} height={50} loading="lazy"/>
                    <div className="font-serif font-bold mx-3">
                        <p className="text-xl">Canceled</p>
                        <p className="text-base">1</p>
                    </div>
                </div>

            </div>
        </div>
    )
}