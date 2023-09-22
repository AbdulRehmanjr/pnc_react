
import { Link } from 'react-router-dom';

function About() {
  return (
    
      <section className="bg-forest-green  grid grid-cols-1 md:grid-cols-2 p-7 mt-20 mb-10">
        <div className="font-bold font-serif text-white ">
          <p className="text-3xl md:text-7xl">Business 365</p>
          <ul role='list' className="list-none p-6 cursor-pointer">
            <li className="flex gap-3 py-2"><img src="/icons/globe-white.png" alt="globe" /> <span className="text-2xl p-2">Connect Business</span></li>
            <li className="flex gap-3 py-2"><img src="/icons/recycle.png" alt="recycle" /> <span className="text-2xl p-2">Sustainable Commerce</span></li>            
            <li className="flex gap-3 py-2"><img src="/icons/freelance.png" className="w-[50px] h-[50px]" alt="freelance" /> <span className="text-2xl p-2">Freelance Opportunities</span></li>
            <li className="flex gap-3 py-2"><img src="/icons/community.png" className="w-[50px] h-[50px]" alt="globe" /> <span className="text-2xl p-2">Join Us</span></li>
          </ul>
          <div className="m-4 text-center">
              <Link to="/about-us">
                <button className=" bg-white text-forest-green text-xl font-serif font-bold rounded-lg p-3 drop-shadow-2xl shadow-white hover:bg-forest-green hover:text-white hover:border-white hover:border-2">
                  <i className="fas fa-info-circle px-1"></i>
                  About Us
                </button>
              </Link>
            </div>
        </div>
        <div className="hidden md:block">
          <img className="rounded-xl shadow-md shadow-white h-full" style={{clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }}  src="/intro/about.png" alt="about" />
        </div>
      </section>
    
  );
}

export default About;
