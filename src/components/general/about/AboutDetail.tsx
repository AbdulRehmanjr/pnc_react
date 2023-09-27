import style from './AboutDetail.module.css'
function AboutDetail() {

    const cards = [
        { id: 1,image: '/about/career.svg', name: 'career' },
        { id:2, image: '/about/newsroom.svg', name: 'Newsroom' },
        { id:3, image: '/about/press.svg', name: 'Investor Relation' },
        { id:4, image: '/about/advertiser.svg', name: 'Trust & Safety' }
    ]

    return (
        <section id="about-us">
            <div className={`grid grid-cols-1 ${style.bg_detail}`}>
                <div className="flex justify-center items-center">
                    <p className="text-white font-['Cyborg']  text-xl md:text-4xl underline underline-offset-8 decoration-8 decoration-green-600 leading-loose brightness-100">PNC CONNECT PEOPLE WITH LOCAL BUSINESS</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 m-10">
                {
                    cards.map((card) => (
                        <div className="" key={card.id}>
                            <div className={`card ${style.detail_card}`}>
                                <img className={`${style.detail_card_img}`} src={card.image} alt={card.name} />
                                <p className={`${style.detail_card_title} text-center`}>{card.name }</p>
                                <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia qui eveniet porro odio.</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default AboutDetail