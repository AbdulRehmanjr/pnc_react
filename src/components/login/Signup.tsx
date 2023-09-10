import './Signup.css'

function Signup() {
    return (

            <section className="login_bg_color">
                <div className="px-4 py-4 px-md-5 text-center text-lg-start" >
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6">
                                <h1 className="my-4 display-3 fw-bold ls-tight text_green">
                                    The best offer <br />
                                    <span className="text-white">htmlFor your business</span>
                                </h1>
                                <p >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                                    quibusdam tempora at cupiditate quis eum maiores libero
                                    veritatis? Dicta facilis sint aliquid ipsum atque?
                                </p>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body py-4 px-md-5">
                                        <form>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example1">First name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example2" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example2">Last name</label>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                            </div>


                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                            </div>

                                            <button type="submit" className="btn btn-success btn-block mb-4 shadow">
                                                Sign up
                                            </button>

                                            <hr />
                                            <div className="text-center">
                                                <p>or sign up with:</p>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-facebook-f login_icon"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-google login_icon"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-twitter login_icon"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-github login_icon"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
    )
}

export default Signup