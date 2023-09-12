import { Link } from 'react-router-dom'

import style from './PLatform.module.css'
function Platform() {

  return (

    <section className="px-7 grid grid-cols-1 md:grid-cols-2 mt-20 mb-10">
      <div className="about">
        <p className="text-green-600 font-bold font-['Cyborg'] text-xl md:text-3xl md:leading-loose">Available on Multiple Platforms</p>
        <p className="py-4 font-['Cyborg'] text:xl md:text-2xl underline decoration-8 decoration-green-600 underline-offset-8">About PNC</p>
        <p className="text-black text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis velit nesciunt nisi quos dolor, tenetur illo omnis itaque iusto explicabo magni esse atque? Quasi, quod! Soluta, provident quod. Quibusdam unde exercitationem numquam molestiae libero inventore incidunt iste? Odio, id veniam alias vero doloribus eos optio aliquid voluptate soluta aut provident!
        </p>
        <ul className='py-5 list-none'>
          <li className="font-bold text-lg"><i className="fa-solid fa-mobile text-green-600"></i> Mobiles</li>
          <li className="font-bold text-lg"><i className="fa-solid fa-tablet text-green-600"></i> Tablets</li>
          <li className="font-bold text-lg"><i className="fa-solid fa-laptop text-green-600"></i> Laptops</li>
          <li className="font-bold text-lg"><i className="fa-solid fa-computer text-green-600"></i> Desktops</li>
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
        <img className="" src="src/assets/intro/devices.png"
          alt="platform image" />
      </div>
    </section>
  )
}

export default Platform