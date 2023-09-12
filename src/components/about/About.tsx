
import { Link } from 'react-router-dom';

import style from './About.module.css'
function About() {
  return (
    <>
      <section className="px-7 grid grid-cols-1 md:grid-cols-2 mt-20 mb-10">
        <div className="about">
          <p className="text-green-600 font-bold font-['Cyborg'] text-2xl md:text-4xl">Who we are?</p>
          <p className="py-4 font-['Cyborg'] text:xl md:text-2xl underline decoration-8 decoration-green-600 underline-offset-8">About PNC</p>
          <p className="text-black text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis velit nesciunt nisi quos dolor, tenetur illo omnis itaque iusto explicabo magni esse atque? Quasi, quod! Soluta, provident quod. Quibusdam unde exercitationem numquam molestiae libero inventore incidunt iste? Odio, id veniam alias vero doloribus eos optio aliquid voluptate soluta aut provident!
          </p>
          <div className="m-4 text-center">
              <Link to="/about-us">
                <button className={`${style.btn_about}`}>
                  <i className="fas fa-info-circle px-1"></i>
                  About Us
                </button>
              </Link>
            </div>
        </div>
        <div className="hidden md:block">
          <img className="drop-shadow-lg" src="src/assets/intro/about.png" alt="about" />
        </div>
      </section>
    </>
  );
}

export default About;
