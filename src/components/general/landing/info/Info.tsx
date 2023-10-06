export const Info = () => {

    return (
        <section className="grid grid-cols-2 p-8">
            <div className="col-span-2" data-aos="fade-right" data-aos-duration="1000">
                <p className="font-bold font-mono">MULTICHANNEL ECOMMERENCE</p>
                <h1 className="text-5xl text-forest-green font-bold font-sans">Sell online wherever your customers are</h1>
            </div>
            <div className="hidden md:grid md:col-span-1" data-aos="fade-right" data-aos-duration="2000">
                <img src="/landing/info.png" className="h-[31rem] w-[31rem]" alt="image" />
            </div>
            <div className="col-span-2 md:col-span-1 p-6" data-aos="fade-left" data-aos-duration="2000">
                <ul className="list-none">
                    <li className="mb-6">
                        <h6 className="text-forest-green text-2xl font-bold font-mono leading-10">Ecommerce Website</h6>
                        <p className="text-black font-sans text-lg"> Instantly set up an online store equipped with essential tools that drive sales and simplify your day-to-day management. Create a seamless checkout flow that will keep your customers coming back.</p>
                    </li>
                    <li className="mb-6">
                        <h6 className="text-forest-green text-2xl font-bold font-mono leading-10">Social, Live & Chat Commerce</h6>
                        <p className="text-black font-sans text-lg">Maximize your brand exposure on Facebook, Instagram and converting your followers into customers. Improve customer loyalty via messaging service for seamless connection with costumers.</p>
                    </li>
                    <li className="mb-6">
                        <h6 className="text-forest-green text-2xl font-bold font-mono leading-10">Online Marketplaces</h6>
                        <p className="text-black font-sans text-lg">EasyStore helps you to synchronize your product inventory across multiple sales channels. Drive more sales and expand your reach by selling on channels with large customer base like Shopee, Lazada, ZALORA, and even more.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}