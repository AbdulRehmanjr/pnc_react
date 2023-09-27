
import { Link } from 'react-router-dom'
import style from './BecomeSeller.module.css'

const BecomeSeller = () => {

  return (
    <>

      <section className={`${style.bg} flex items-center`}>
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