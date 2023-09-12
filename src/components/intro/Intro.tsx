import './Intro.css'

function Intro() {
  return (
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-screen h-full">
        <div className="px-5 py-9">
          <h1 className="text-green-600 p-2 text-3xl md:text-6xl font-bold intro_headhing_primary">Business365 <br /><span className='text-2xl md:text-3xl p-2 underline_pri-title'> Where Local Meets Global</span></h1>
          <p className="text-black text-lg md:text-2xl mt-4 text-left leading-normal">
            Discover a world of possibilities with Business365! Our all-in-one platform seamlessly connects local businesses with the global marketplace and empowers you to explore, shop, and socialize like never before. Whether you're looking for your favorite local stores, unique e-commerce finds, or a vibrant social community, Business365 has you covered. Join us today and experience a new way to do business, 365 days a year!
          </p>
        </div>
        <div className="hidden md:block p-6">
          <img src="src/assets/intro/intro.png" alt="intro" />
        </div>
      </div>

  );
}


export default Intro