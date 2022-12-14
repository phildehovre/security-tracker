import React, { } from 'react'
import './Login.scss'
import SignInButton from './SignInButton'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function Login() {

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
        createdOn: yup.date().default(function () {
            return new Date();
        }),
    });

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitHandler = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className='login-ctn'>
            <h1>MyFi</h1>
            <h3>Please sign in</h3>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className='field-ctn'>
                    <label name='email'>E-mail</label>
                    <input {...register("email")} name='email' type='text' placeholder='E-mail address'></input>
                    <p>{errors.email?.message}</p>
                </div>
                <div className='field-ctn'>
                    <label name='password'>Choose a password</label>
                    <input {...register("password")} name='password' type='password' placeholder='Choose a password'></input>
                    <p>{errors.password?.message}</p>
                </div>
                <button className='signin-btn' type='submit'>Sign in</button>

                <SignInButton />
            </form>
        </div>
    )
}



export default Login