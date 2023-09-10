import './About.css'

import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <section id="about" className="row bg-white p-5">
        <div className="col-sm-12 col-md-6">
          <div className="about">
            <div className="sec-title">Who we are?</div>
            <div className="underline_pri-title">About PNC</div>
            <div className="brief-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              distinctio officiis expedita voluptatem aut ratione veniam saepe
              enim, harum eos, labore inventore. Odio voluptatum veritatis
              consectetur excepturi quos! Magni, omnis!
            </div>
            <div className="m-4 text-center">
              <Link to="/about-us">
                <button className="btn-about">
                  <i className="fas fa-info-circle px-1"></i>
                  About Us
                </button>
              </Link>

            </div>
          </div>
        </div>
        <div className="d-none d-md-block col-md-6">
          <img className="about-img" src="src/assets/intro/about.png" alt="about" />
        </div>
      </section>
    </>
  );
}

export default About;
