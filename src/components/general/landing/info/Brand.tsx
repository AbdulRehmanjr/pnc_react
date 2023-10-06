

export const Brand = ()=>{
    return (
        <section className="grid grid-cols-2 p-8">
            <div className="col-span-2" data-aos="fade-right" data-aos-duration="1000">
                <p className="font-bold font-mono">ONLINE STORE</p>
                <h1 className="text-5xl text-forest-green font-bold font-sans">Build your brand with an online store</h1>
            </div>
            <div className="hidden md:grid md:col-span-1" data-aos="fade-right" data-aos-duration="2000">
                <img src="/landing/store.png" className="h-[31rem] w-[31rem]" alt="image" />
            </div>
            <div className="col-span-2 md:col-span-1 p-6" data-aos="fade-left" data-aos-duration="2000">
                <ul className="list-none">
                    <li className="mb-6">
                        <h6 className="text-forest-green text-2xl font-bold font-mono leading-10">Ecommerce Website</h6>
                        <p className="text-black font-sans text-lg">Add as many products as you’d like to your online store. With no limits, you can stock and sell the variety of products.</p>
                    </li>
                    <li className="mb-6">
                        <h6 className="text-forest-green text-2xl font-bold font-mono leading-10">Social, Live & Chat Commerce</h6>
                        <p className="text-black font-sans text-lg">Maximize your brand exposure on Facebook, Instagram and converting your followers into customers. Improve customer loyalty via messaging service for seamless connection with costumers.</p>
                    </li>
                    <li className="mb-6">
                        <h6 className="text-forest-green text-2xl font-bold font-mono leading-10">Designed for Mobile</h6>
                        <p className="text-black font-sans text-lg">All EasyStore themes are fully responsive, which means your customers get a consistent experience no matter how they browse your store.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}