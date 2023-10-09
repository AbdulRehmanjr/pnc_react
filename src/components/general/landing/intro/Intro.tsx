


function Intro() {

 
  return (
    <section className="grid grid-cols-2 h-screen  bg-green-500  p-24">
      <div className="col-span-2 md:col-span-1">
        <p className="text-[#FFD700] text-2xl font-bold font-mono"> Where Local Meets Global</p>
        <h1 className="text-white text-7xl  font-bold font-serif">Business365</h1>
        <p className="text-white ffont-mono text-xl mt-4 text-left leading-normal">
          "Connect, Shop, Socialize - Your All-in-One Business Platform."
        </p>
       <button className="text-xl text-forest-green bg-white font-sans font-bold rounded-xl shadow-lg shadow-[#FFD700] m-20 p-4">Let's Start<i className="fa-solid fa-arrow-right px-2"></i></button>
      </div>
      <div className="col-span-2 md:col-span-1">
        <img src="/intro/intro.jpeg" alt="into image" style={{ clipPath: 'polygon(100% 0%, 89% 50%, 100% 100%, 18% 100%, 0 49%, 18% 0)' }} className="h-full rounded-lg" loading="lazy" />

      </div>
    </section>
  );
}


export default Intro