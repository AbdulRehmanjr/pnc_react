import { FormEvent, useState } from 'react'
import './Intro.css'

function Intro() {

  const [search, setSearch] = useState<string>('')


  const hanldeSubmit = async (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setSearch('')
  }
  return (
    
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-screen h-full bg-[url('/intro/intro_bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="px-5 py-9">
          <h1 className="text-white p-2 text-3xl md:text-7xl font-bold font-['Cyborg']">Business365 <br /><span className='text-black text-2xl p-2 '> Where Local Meets Global</span></h1>
          <p className="text-white font-bold font-serif text-lg md:text-3xl mt-4 text-left leading-normal">
          "Business365: Connect, Shop, Socialize - Your All-in-One Business Platform."
          </p>
          <form className="p-5 " onSubmit={hanldeSubmit}>
            <input type="text" value={search} onChange={e => setSearch(e.target['value'])} className="bg-white p-4 text-xl rounded-xl w-80  shadow-white shadow-sm" placeholder='Search....' />
            <button className="text-white font-bold font-serif text-xl rounded-xl bg-green-300 ml-2 p-4  shadow-green-300 shadow-sm">
                Search 🚀
            </button>
        </form>
        </div>
        
      </section>

  );
}


export default Intro