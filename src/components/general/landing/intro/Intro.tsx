import { FormEvent, useState } from 'react'


function Intro() {

  const [search, setSearch] = useState<string>('')


  const hanldeSubmit = async (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setSearch('')
  }

  return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen bg-[url('/intro/intro_bg.png')] bg-cover bg-center bg-no-repeat brightness-80">  
        <div className="px-5 py-9">
          <h1 className="text-white text-5xl md:text-9xl font-bold font-serif">Business365<span className='text-2xl md:text-4xl'> Where Local Meets Global</span></h1>
          <p className="text-white font-bold font-serif text-xl md:text-3xl mt-4 text-left leading-normal">
          "Connect, Shop, Socialize - Your All-in-One Business Platform."
          </p>
          <form className="py-5  md:p-5 flex flex-col md:flex-row" onSubmit={hanldeSubmit}>
            <input type="text" value={search} onChange={e => setSearch(e.target['value'])} className="bg-white text-xl rounded-xl w-80  shadow-md p-4 md:p-2 md:m-4 " placeholder='Search....' />
            <button className=" w-fit text-white font-bold font-sans text-xl md:text-2xl rounded-lg bg-green-300 shadow-green-300 shadow-sm m-2 p-2 md:m-4 md:p-4">
                Search 🚀
            </button>
        </form>
        </div>
      </section>

  );
}


export default Intro