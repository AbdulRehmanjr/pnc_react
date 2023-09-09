import "./Team.css";

function Team() {
  return (
    <>
      <section id="team" className="row my-2 p-5">
        <div className="col-sm-12 col-md-6 my-5">
          <div className="team">
            <div className="sec-title">Meet our professfional team?</div>
            <div className="underline_pri-title">Contact Us</div>
            <div className="brief-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              distinctio officiis expedita voluptatem aut ratione veniam saepe
              enim, harum eos, labore inventore. Odio voluptatum veritatis
              consectetur excepturi quos! Magni, omnis!
            </div>
            <div className="m-4 text-center">
              <button className="btn-team">
                <i className="fa-regular fa-paper-plane px-1"></i>
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="d-none d-md-block col-md-6">
          <img
            className="team-img"
            src="src/assets/intro/contact.png"
            alt="team picture"
          />
        </div>
      </section>
    </>
  );
}

export default Team;
