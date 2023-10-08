export const Retail = () => {

    return (
        <>
            <section className="bg-forest-green grid grid-cols-2 p-8">
                <div className="col-span-2" data-aos="fade-right" data-aos-duration="1000">
                    <p className="text-[#FFD700] font-bold font-mono">OMNICHANNEL RETAIL</p>
                    <h1 className="text-5xl text-white font-bold font-sans">The modern way for your retail business</h1>
                </div>
                <div className="col-span-2 md:col-span-1 p-6" data-aos="fade-right" data-aos-duration="2000">
                    <ul className="list-none">
                        <li className="mb-6">
                            <h6 className="text-[#FFD700] text-2xl font-bold font-mono leading-10">Flexible Point-of-Sale</h6>
                            <p className="text-white font-sans text-lg">Power your business with the all-in-one POS that merges with your marketing, sales, inventory and ecommerce. Turn any mobile device into a point of sale when you need it</p>
                        </li>
                        <li className="mb-6">
                            <h6 className="text-[#FFD700] text-2xl font-bold font-mono leading-10">Unified Loyalty Program</h6>
                            <p className="text-white font-sans text-lg">Grow brand engagement and build long-term customer relationships. Reward your customers with the integrated loyalty program which keep bringing them back, both in-store and online.</p>
                        </li>
                        <li className="mb-6">
                            <h6 className="text-[#FFD700] text-2xl font-bold font-mono leading-10">Responsive Design</h6>
                            <p className="text-white font-sans text-lg">The mobile view lets you drive more conversions and repeat purchases. Allow customers to easily shop and make repeat purchase at their fingertips, anywhere, anytime.</p>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:grid md:col-span-1 p-4" data-aos="fade-left" data-aos-duration="2000">
                    <img src="/landing/retail.png" className="h-[31rem] w-[31rem]" alt="image" loading="lazy" />
                </div>
            </section>
        </>

    )
}