
import style from './Signup.module.css'

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
            .then(_response => console.log('user saved'))
            .catch(error => console.error(error))

    };

    return (

        <section className="bg-gray-300 h-full">
            <div className="py-[19.6px] md:px-5 text-center">
                <div className="container">
                    <div className="grid grid-cols-2 items-center">
                        <div className="hidden md:grid md:col-span-1">
                            <h1 className="text-green-600 text-xl md:text-5xl leading-10 font-['Cyborg'] font-bold my-4">
                                The best offer <br /> <br />
                                <span className="text-white md:text-4xl leading-8 p-2">htmlFor your business</span>
                            </h1>
                            <p className="text-black font-bold leading-8" >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                                quibusdam tempora at cupiditate quis eum maiores libero
                                veritatis? Dicta facilis sint aliquid ipsum atque?
                            </p>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <div className="bg-white border-green-600 border-2 rounded-lg">
                                <div className="card-body py-4 px-md-5">
                                    <h1 className="text-green-600 text-xl md:text-3xl font-bold font-['Cyborg'] my-4">
                                        Join Us Today
                                    </h1>
                                    <form className="grid grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="col-span-2">
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
                                                                <PersonIcon className="text-green-600"/>
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            {errors?.firstName && <p className="text-red-600">{errors.firstName?.message?.toString()}</p>}
                                        </div>
                                        <div className="col-span-2 ">
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
                                                                <PersonIcon className="text-green-600" />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            {errors?.lastName && <p className="text-red-600">{errors.lastName?.message?.toString()}</p>}
                                        </div>
                                        <div className="col-span-2">
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
                                                                <AlternateEmailIcon className="text-green-600" />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            {errors?.email && <p className="text-red-600">{errors.email?.message?.toString()}</p>}
                                        </div>
                                        <div className="col-span-2">
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
                                                                {showPassword ? <VisibilityOff className="text-green-600" /> : <Visibility className="text-green-600"/>}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }

                                                />
                                            </FormControl>
                                            {errors?.password && <p className="text-red-600">{errors.password?.message?.toString()}</p>}
                                        </div>
                                        <div className="col-span-2 justify-center my-3">
                                            <button type="submit" className="text-green-600 text-sm bg-white drop-shadow-md font-bold font-['Cyborg']  rounded-full p-4 my-5">
                                                Sign up
                                            </button>
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

