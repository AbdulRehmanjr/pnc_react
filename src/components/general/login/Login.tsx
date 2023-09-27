
import style from './Login.module.css'

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { FormControl, InputLabel, FilledInput, InputAdornment, IconButton } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { currentUserInfo, loginUser, setToken } from '../../../services/LoginService';




function Login() {


  const { handleSubmit, register, formState: { errors } } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const naviate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    loginUser(data)
      .then((response: Response) => {
        setToken(response['data'])
      })
      .catch(error => console.error(error))
      .finally(
        () =>
          currentUserInfo()
            .then((response: Response) => localStorage.setItem('user', JSON.stringify(response['data'])))
            .catch((error: Error) => console.log(error))
            .finally(() => naviate('/'))
      )
  };
  return (
    <section className="grid grid-cols-2 bg-forest-green md:bg-inherit h-screen">
      <div className="col-span-2 md:col-span-1 mt-[50px] mx-2 md:p-4 md:m-6">
        <form className="bg-gray-200 rounded-lg drop-shadow-xl" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-serif font-extrabold text-black text-2xl text-center p-4 md:text-5xl">Login</h1>
          <div className="flex flex-row items-center justify-center">
            <p className="text-xl">Sign in with</p>
            <button type="button" className="btn btn-success btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-success btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-success btn-floating mx-1">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div className={`${style.divider} flex items-center my-4`}>
            <p className="text-center font-bold mx-3 mb-0">Or</p>
          </div>
          <div className="flex flex-col">
            <div className="email_section mx-auto">
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
            <div className="password_section mx-auto">
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
          </div>
          <div className="text-center text-lg-start my-4 py-2">
            <button type="submit" className="text-green-600 text-lg bg-white drop-shadow-md font-bold font-serif rounded-xl p-2 px-6 my-2">
              Login
            </button>
            <p className="text-black font-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup"
              className="text-red-500">Register</Link></p>
          </div>
        </form>
      </div>
      <div className="hidden md:block col-span-1 h-screen">
        <img src="/login_1.jpeg" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} className="h-full w-full" alt="login" loading='lazy' />
      </div>
    </section>
  )
}

export default Login