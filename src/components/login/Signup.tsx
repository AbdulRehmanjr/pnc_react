import './Signup.css'

import { useForm, Controller } from 'react-hook-form';

import * as yup from 'yup';

function Signup() {


    const { handleSubmit, control, formState: { errors } } = useForm();

    // Create a yup schema for validation
    const schema = yup.object().shape({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    console.log('rending')
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
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <Controller
                                                        name="firstName"
                                                        control={control}
                                                        defaultValue=""
                                                        render={({ field }) => (
                                                            <div>
                                                                <input
                                                                    type="text"
                                                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                                                    placeholder="First name"
                                                                    {...field}
                                                                />
                                                                {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
                                                            </div>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <Controller
                                                        name="lastName"
                                                        control={control}
                                                        defaultValue=""
                                                        render={({ field }) => (
                                                            <div>
                                                                <input
                                                                    type="text"
                                                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                                                    placeholder="Last name"
                                                                    {...field}
                                                                />
                                                                {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                                                            </div>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <Controller
                                                name="email"
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => (
                                                    <div>
                                                        <input
                                                            type="email"
                                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                            placeholder="Email address"
                                                            {...field}
                                                        />
                                                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                                    </div>
                                                )}
                                            />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <Controller
                                                name="password"
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => (
                                                    <div>
                                                        <input
                                                            type="password"
                                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                            placeholder="Password"
                                                            {...field}
                                                        />
                                                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                                                    </div>
                                                )}
                                            />
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
                                    </ form>
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

