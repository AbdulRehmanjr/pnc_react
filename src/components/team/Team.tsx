import { Link } from "react-router-dom";
import style from './Team.module.css'

function Team() {
  return (
    <>
      <section className="px-7 grid grid-cols-1 md:grid-cols-2 mt-20 mb-10">
        <div className="about">
          <p className="text-green-600 font-bold font-['Cyborg'] text-xl md:text-3xl md:leading-loose">Meet our professfional team?</p>
          <p className="py-4 font-['Cyborg'] text:xl md:text-2xl underline decoration-8 decoration-green-600 underline-offset-8">Contact Us</p>
          <p className="text-black text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta facere ipsa minus sed consequatur iusto sint excepturi, officia architecto aut debitis, beatae tenetur impedit similique quibusdam aliquam, velit hic tempora provident! Totam dolorum recusandae placeat officia? Quas animi dignissimos exercitationem aspernatur dolor atque ut id saepe iusto deleniti nobis rem ullam quia fugit suscipit blanditiis est sint qui ipsa nesciunt, quasi soluta nisi? Beatae fuga suscipit modi recusandae quia?
          </p>
          <div className="m-4 text-center">
            <Link to="/about-us">
              <button className={`${style.btn_team}`}>
                <i className="fa-regular fa-paper-plane px-1"></i>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <img className="mt-20" src="src/assets/intro/contact.png"
            alt="team picture" />
        </div>
      </section>
    </>
  );
}

export default Team;
