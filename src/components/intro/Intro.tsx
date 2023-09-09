import './Intro.css'

function Intro() {
  return (
    <>
      <section className="height_full">
        <div
          id="myCarousel"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
          data-bs-theme="light"
          data-bs-interval="2000"
          data-bs-wrap="true"
        >
          <div className="carousel-indicators d-flex flex-column">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className=""
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="active"
              aria-current="true"
            ></button>
          </div>
          <div className="carousel-inner height_full">
            <div className="carousel-item">
              <div className="carousel-background">
                <img src="src/assets/intro/house.jpg" alt="house img" />
              </div>

              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Open Your Door with Ease.</h1>
                  <p className="opacity-75"></p>
                  <p>
                    <a className="btn btn-lg btn-success fs-5" href="/">
                    <i className="fa-brands fa-golang mx-1"></i>
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-background">
                <img src="src/assets/intro/bath.jpg" alt="bath img" />
              </div>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Another example headline.</h1>
                  <p>
                    Some representative placeholder content for the second slide
                    of the carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-success" href="/">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="carousel-background">
                <img src="src/assets/intro/door.jpg" alt="door img" />
              </div>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-success" href="/">
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default Intro