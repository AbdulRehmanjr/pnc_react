
import './Signup.css'

import { FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { FormControl, InputLabel, FilledInput, InputAdornment, IconButton } from '@mui/material';
import RegistrationService from '../../services/RegistrationService'


function Signup() {

    const registrationService = new RegistrationService();

    const { handleSubmit, register, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onSubmit = (data: FieldValues) => {

        registrationService.registerUser(data)
            .then(response => console.log('user saved'))
            .catch(error => console.error(error))

    };

    return (

        <section className="login_bg_color">
            <div className="px-4 py-4 px-md-5 text-center text-lg-start" >
                <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="d-none d-md-block col-md-6">
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

                        <div className="col-sm-12 col-md-6">
                            <div className="card">
                                <div className="card-body py-4 px-md-5">
                                    <h1 className="my-4 display-6 fw-bold ls-tight text_green">
                                        Join Us Today
                                    </h1>
                                    <form className="row" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="col-sm-12 col-lg-6">
                                            <FormControl sx={{
                                                m: 1, '& .MuiFilledInput-underline:after': {
                                                    borderColor: 'green',
                                                },
                                                '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
                                                    color: 'green',
                                                },
                                                '& .MuiFilledInput-root': {
                                                    backgroundColor: 'white',
                                                },
                                            }} variant="filled">
                                                <InputLabel htmlFor="filled-adornment-firstName">First Name</InputLabel>
                                                <FilledInput
                                                    {...register('firstName', {
                                                        required: 'First Name is required',
                                                    })}
                                                    id="filled-adornment-firstName"
                                                    type='text'
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label='firstName text'
                                                                edge="end"
                                                            >
                                                                <PersonIcon />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            {errors?.firstName && <p className="error-message">{errors.firstName?.message?.toString()}</p>}
                                        </div>
                                        <div className="col-sm-12 col-lg-6">
                                            <FormControl sx={{
                                                m: 1, '& .MuiFilledInput-underline:after': {
                                                    borderColor: 'green',
                                                },
                                                '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
                                                    color: 'green',
                                                },
                                                '& .MuiFilledInput-root': {
                                                    backgroundColor: 'white',
                                                }
                                            }} variant="filled">
                                                <InputLabel htmlFor="filled-adornment-lastName">Last Name</InputLabel>
                                                <FilledInput
                                                    {...register('lastName', {
                                                        required: 'Last Name is required',
                                                    })}
                                                    id="filled-adornment-lastName"
                                                    type='text'
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label='lastName text'
                                                                edge="end"
                                                            >
                                                                <PersonIcon />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            {errors?.lastName && <p className="error-message">{errors.lastName?.message?.toString()}</p>}
                                        </div>
                                        <div className="col-sm-12">
                                            <FormControl sx={{
                                                m: 1, '& .MuiFilledInput-underline:after': {
                                                    borderColor: 'green',
                                                },
                                                '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
                                                    color: 'green',
                                                },
                                                '& .MuiFilledInput-root': {
                                                    backgroundColor: 'white',
                                                }
                                            }} variant="filled">
                                                <InputLabel htmlFor="filled-adornment-email">Email Address</InputLabel>
                                                <FilledInput
                                                    {...register('email', {
                                                        required: 'Email is required',
                                                    })}
                                                    id="filled-adornment-email"
                                                    type='email'
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label='email text'
                                                                edge="end"
                                                            >
                                                                <AlternateEmailIcon />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            {errors?.email && <p className="error-message">{errors.email?.message?.toString()}</p>}
                                        </div>
                                        <div className="col-sm-12">
                                            <FormControl sx={{
                                                m: 1, '& .MuiFilledInput-underline:after': {
                                                    borderColor: 'green',
                                                },
                                                '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
                                                    color: 'green',
                                                },
                                                '& .MuiFilledInput-root': {
                                                    backgroundColor: 'white',
                                                }
                                            }} variant="filled">
                                                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                                <FilledInput
                                                    {...register('password', {
                                                        required: 'Password is required',
                                                    })}
                                                    id="filled-adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }

                                                />
                                            </FormControl>
                                            {errors?.password && <p className="error-message">{errors.password?.message?.toString()}</p>}
                                        </div>
                                        <div className="d-flex justify-content-center my-3">
                                            <button className="btn btn-success">Submit</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >

    )
}

export default Signup

