

const TopSellers = () => {
    return (
        <section className="my-[80px]">
            <h1 className="text-black text-center text-3xl md:text-4xl font-['Cyborg'] underline underline-offset-[10px] decoration-8 decoration-green-600">Top Sellers</h1>
            <div className="grid grid-cols-3 my-[25px] mx-10">
                <div className="col-span-3 bg-slate-600">
                    <h1>First</h1>
                </div>
                <div className="col-span-2 bg-slate-500">
                    <h1>Second</h1>
                </div>
                <div className="col-span-1 bg-slate-400">
                    <h1>Third</h1>
                </div>
            </div>
        </section>
    )
}

export default TopSellers