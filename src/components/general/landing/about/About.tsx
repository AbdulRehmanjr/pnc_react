
import { Link } from 'react-router-dom';

function About() {
  return (
    
      <section className="bg-forest-green  grid grid-cols-1 md:grid-cols-2 p-7 mt-20 mb-10">
        <div className="font-bold font-serif text-white " data-aos="fade-right" data-aos-duration="1000">
          <p className="text-xl md:text-5xl">Simplifying commerce for everyone</p>
          <ul role='list' className="list-none p-6 cursor-pointer">
            <li className="flex gap-3 py-2"><img src="/icons/globe-white.png" alt="globe"  className="h-[3rem] w-[3rem]"/> <span className="text-[#FFD700] text-xl p-2">Connect Business</span></li>
            <li className="flex gap-3 py-2"><img src="/icons/recycle.png" alt="recycle" className="h-[3rem] w-[3rem]" /> <span className="text-[#FFD700] text-xl p-2">Sustainable Commerce</span></li>            
            <li className="flex gap-3 py-2"><img src="/icons/freelance.png" className="w-[3rem] h-[3rem]" alt="freelance" /> <span className="text-[#FFD700] text-xl p-2">Freelance Opportunities</span></li>
            <li className="flex gap-3 py-2"><img src="/icons/community.png" className="w-[3rem] h-[3rem]" alt="globe" /> <span className="text-[#FFD700] text-xl p-2">Join Us</span></li>
          </ul>
          <div className="m-4 text-center">
              <Link to="/about-us">
                <button className=" bg-white text-forest-green text-xl font-serif font-bold  p-3 shadow-md shadow-white">
                  <i className="fas fa-info-circle px-1"></i>
                  About Us
                </button>
              </Link>
            </div>
        </div>
        <div className="hidden md:block"  data-aos="fade-left" data-aos-duration="3000">
          <img className="rounded-xl shadow-md shadow-white h-full" style={{clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50px%)' }}  src="/intro/about.png" alt="about" />
        </div>
      </section>
    
  );
}

export default About;
