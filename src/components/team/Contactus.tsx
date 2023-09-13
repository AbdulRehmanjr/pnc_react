import style from './Contactus.module.css'



const ContactUs = () => {

    return (
        <section className={`${style.bg_detail}`}>
            <div className="flex justify-center items-center align-middle h-full">
                <div className="backdrop-blur-sm bg-white/30 w-fit">
                    <form className="flex flex-col p-5 ">
                        <h1 className="text-white font-bold font-['Cyborg'] text-xl md:text-4xl m-2">Contact Us</h1>

                        <input className={`${style.input} p-4 m-2 mx-auto`} name="text" type="text" placeholder="Full Name" />
                        <input className={`${style.input} p-4 m-2 mx-auto`} name="email" type="email" placeholder="Email" />
                        <textarea className={`${style.input} p-4 m-2 mx-auto`} cols={20} rows={5} name="textarea" placeholder='Enter your message'>
                        </textarea>
                        <button type="submit" className={`${style.send_btn} mx-auto rounded-full`} >Send</button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default ContactUs