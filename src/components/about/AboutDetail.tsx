
import './AboutDetail.css'


function AboutDetail() {

    const cards = [
        { id: 1,image: 'src/assets/about/career.svg', name: 'career' },
        { id:2, image: 'src/assets/about/newsroom.svg', name: 'Newsroom' },
        { id:3, image: 'src/assets/about/press.svg', name: 'Investor Relation' },
        { id:4, image: 'src/assets/about/advertiser.svg', name: 'Trust & Safety' }
    ]

    return (
        <section id="about-us">
            <div className="row bg_detail">
                <div className="col-7 offset-3 d-flex justify-content-center align-items-center">
                    <p className="detail_title">PNC CONNECT PEOPLE WITH LOCAL BUSINESS</p>
                </div>
            </div>
            <div className="row m-5 p-5">
                {
                    cards.map((card) => (
                        <div className="col-md-3" key={card.id}>
                            <div className="card detail_card">
                                <img className="detail_card-img" src={card.image} alt={card.name} />
                                <p className="detail_card-title text-center">{card.name }</p>
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