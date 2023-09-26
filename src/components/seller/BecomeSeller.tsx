
import { Link } from 'react-router-dom'
import style from './BecomeSeller.module.css'

const BecomeSeller = () => {
  /**
   * <section id="start-business">
    <div className="row bg">
      <div className="col-md-5 offset-md-1 d-flex align-items-center">
        <div className="card p-4">
          <p className="card-title">It's free to be on PNC</p>
          <ul>
            <li>Boost Your business</li>
            <li>Take business to door steps</li>
          </ul>
          <p className="card-des">Become Seller Now</p>
          <button className="btn-start" routerLink="/home/become-seller">
            <i className="fa-regular fa-circle-play"></i>
            Let's go
          </button>
        </div>
      </div>
    </div>
  </section>
  <section id="start-detail" className="m-4">
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <p className="detail-heading">
          Advertising solutions for your
          small business
        </p>
      </div>
  
      <div className="row d-flex justify-content-center">
        <div className="col-md-3">
          <a href="/home/about-us" className="card">
            <img
              className="card-img img-fluid"
              src="assets/business/sellers.png"
              alt="sellers"
            />
            <p className="card-title text-center">1000+ Sellers</p>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              qui eveniet porro odio.
            </p>
          </a>
        </div>
        <div className="col-md-3">
          <a href="/home/about-us" className="card">
            <img
              className="card-img img-fluid"
              src="assets/business/users.png"
              alt="sellers"
            />
            <p className="card-title text-center">80% Users</p>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              qui eveniet porro odio.
            </p>
          </a>
        </div>
      </div>
    </div>
    <div className="row my-5">
      <div className="col-md-4 offset-md-4">
        <p className="connect-heading">
         Grow your business
        </p>
      </div>
  
    <div className="row">
      <div className="d-none d-md-block col-md-6">
        <img src="assets/business/social.jpg" alt="social">
      </div>
      <div className="col-sm-12 col-md-6">
        <p className="social-heading">
          Help people get to know you
        </p>
        <p className="social-detail">
          Having a strong presence on Yelp helps you establish trust with potential customers. Manage your page for free or upgrade to stand out from the competition.
        </p>
        <ul>
          <li className="social-list-item">Boost Your business</li>
          <li className="social-list-item">Take business to door steps</li>
        </ul>
        <button className="btn-start" routerLink="/home/become-seller">
          <i className="fa-solid fa-shop"></i>
          Become Seller
        </button>
      </div>
    </div>
  
    </div>
  </section>
  
   */
  return (
    <>
      <section>
        <div className={`${style.bg} flex items-center`}>
          <div className="bg-white bg-opacity-30 backdrop-blur-lg mx-5 md:mx-20 p-4 md:p-5 rounded-lg">
            <p className="text-white text-lg md:text-4xl font-serif font-bold">It's free to be on Business365</p>
            <ul className="list-none py-6">
              <li className=""><span className="text-white text-lg md:text-3xl font-sans">Boost Your business</span></li>
              <li className=""><span className="text-white text-lg md:text-3xl font-sans">Take business to door steps</span></li>
            </ul>
            <p className="text-white text-2xl md:text-4xl font-sans font-bold py-5">Join Us Now</p>
            <Link to="/request" className="text-white bg-green-600 rounded-md p-3 font-sans shadow-lg shadow-green-600 hover:text-green-600 hover:bg-white">
              <i className="fa-regular fa-circle-play px-2 my-5"></i>
              Let's go
            </Link>
          </div>
        </div>
      </section>
      <section className="section-2 my-10">
        <div className="grid my-5 p-5">
          <h1 className="text-center text-black font-serif text-xl md:text-2xl">
            Advertising solutions for your small business
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-3 justify-center">
          <a href="/home/about-us" className={`col-span-3 md:col-span-1 mx-auto shadow-lg shadow-green-300 h-[370px] w-[278px]`}>
            <img
              src="/business/sellers.png"
              alt="sellers"
            />
            <p className={`font-serif font-bold text-xl md:text-base text-center p-3`}>1000+ Sellers</p>
            <p className="text-justify p-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              qui eveniet porro odio.
            </p>
          </a>
          <a href="/home/about-us" className={`col-span-3 md:col-span-1 mx-auto shadow-lg shadow-green-300 h-[370px] w-[278px]`}>
            <img
              src="/business/users.png"
              alt="sellers"
            />
            <p className={`font-serif font-bold text-xl md:text-base text-center p-3`}>80% Users</p>
            <p className="text-justify p-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              qui eveniet porro odio.
            </p>
          </a>
        </div>
      </section>
    </>
  )
}

export default BecomeSeller