import { Link } from 'react-router-dom'

import style from './PLatform.module.css'
function Platform() {

  return (
    <section className="bg-forest-green grid grid-cols-1 md:grid-cols-2 p-7 mt-20 mb-10">
      <div className="text-white font-bold font-serif ">
        <p className="text-xl md:text-4xl p-3">Available on Multiple Platforms</p>
        <p className="text-lg p-3">
        Experience seamless access to our platform across various devices and operating systems, ensuring you stay connected and productive wherever you are."
        </p>
        <ul className='p-5 list-none'>
          <li className="text-2xl"><i className="fa-solid fa-mobile text-white"></i> Mobiles</li>
          <li className="text-2xl"><i className="fa-solid fa-tablet text-white"></i> Tablets</li>
          <li className="text-2xl"><i className="fa-solid fa-laptop text-white"></i> Laptops</li>
          <li className="text-2xl"><i className="fa-solid fa-computer text-white"></i> Desktops</li>
        </ul>
        <div className="m-4 text-center">
          <Link to="/about-us">
            <button className={`${style.btn_platform}`}>
              <i className="fa-brands fa-figma px-2"></i>
              Design
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
        <img className="rounded-xl" style={{clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} src="/intro/devices.png"
          alt="platform image" />
      </div>
    </section>
  )
}

export default Platform