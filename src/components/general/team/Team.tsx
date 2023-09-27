import { Link } from "react-router-dom";
import style from './Team.module.css'

function Team() {
  return (
    <section className="px-7 grid grid-cols-1 md:grid-cols-2 mt-20 mb-10">
      <div className="text-green-600 font-bold font-serif" data-aos="fade-right" data-aos-duration="1000">
        <p className=" text-2xl md:text-4xl md:leading-loose">Contact Our Team</p>
        <p className="text-black text-md">
        At Business 365, we're committed to revolutionizing the way you connect, work, and shop. Our vision is to empower individuals, entrepreneurs, and businesses to thrive in a sustainable and interconnected world.
        </p>
        <ul role='list' className="list-none p-6 cursor-pointer">
            <li className="flex gap-3 py-2"><img src="/icons/phone.png" className="w-[35px] h-[35px]"  alt="phone" /> <span className="text-base p-2">24/7 Available</span></li>
            <li className="flex gap-3 py-2"><img src="/icons/support.png"  className="w-[35px] h-[35px]" alt="support" /> <span className="text-base p-2">Expert Support</span></li>            
            <li className="flex gap-3 py-2"><img src="/icons/document.png" className="w-[35px] h-[35px]" alt="document" /> <span className="text-base p-2">FAQs & Guides</span></li>
            <li className="flex gap-3 py-2"><img src="/icons/feedback.png" className="w-[35px] h-[35px]" alt="feedback" /> <span className="text-md p-2">Feedback</span></li>
          </ul>
        <div className="m-4 text-center">
          <Link to="/contact-us">
            <button className={`${style.btn_team}`}>
              <i className="fa-regular fa-paper-plane px-1"></i>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:block" data-aos="fade-left" data-aos-duration="3000">
        <img className="rounded-xl h-full" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 100% 99%, 0 100%, 22% 52%)' }} src="/intro/contact-green.png"
          alt="team picture" />
      </div>
    </section>

  );
}

export default Team;
