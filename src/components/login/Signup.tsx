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

        <section className="bg-[#659063]">
            <div className="grid grid-cols-2 h-screen">
                <div className="hidden md:grid md:col-span-1">
                    <img className="h-screen" style={{ clipPath: 'polygon(0 2%, 100% 0, 96% 100%, 0% 100%)' }}
                        src="/login_2.jpeg" alt="register" loading="lazy" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <div className="bg-white border-green-600 border-2 rounded-lg flex justify-center align-middle m-5">
                        <div className="flex flex-col">
                            <h1 className="text-green-600 text-3xl md:text-5xl font-bold font-serif py-4">
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
                                                        <PersonIcon className="text-green-600" />
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
                                                        {showPassword ? <VisibilityOff className="text-green-600" /> : <Visibility className="text-green-600" />}
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
        </section >

    )
}

export default Signup

