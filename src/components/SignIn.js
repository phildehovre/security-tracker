import React, { } from 'react'
import './Login.scss'
import SignInButton from './SignInButton'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../Contexts/AuthContext'
import { uuidv4 } from '@firebase/util'


function Login() {

    const auth = useAuth()

    console.log(useAuth)

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
        confirmPassword: yup.string().required().oneOf([yup.ref("password")], "Passwords do not match"),
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
                    <label name='firstName'>First Name</label>
                    <input {...register("firstName")} type='text' name='firstName' placeholder='First name'></input>
                    <p>{errors.firstName?.message}</p>
                </div>
                <div className='field-ctn'>
                    <label name='lastName'>Last Name</label>
                    <input {...register("lastName")} type='text' name='lastName' placeholder='Last name'></input>
                    <p>{errors.lastName?.message}</p>
                </div>
                <div className='field-ctn'>
                    <label name='email'>E-mail</label>
                    <input {...register("email")} name='email' type='text' placeholder='E-mail address'></input>
                    <p>{errors.email?.message}</p>
                </div>
                <div className='field-ctn'>
                    <label name='password'>Choose a password</label>
                    <input {...register("password")} name='password' type='password' placeholder='Choose a password'></input>
                    <input  {...register("confirmPassword", {
                        required: true,
                        validate: (val) => {
                            if (watch('password') !== val) {
                                return "Your passwords do no match";
                            }
                        },
                    })}
                        name='confirmPassword' type='password' placeholder='Repeat password'></input>
                    <p>{errors.password?.message}</p>
                </div>

                <button className='signin-btn' type='submit'>Sign in</button>

                <SignInButton />
            </form>
        </div>
    )
}



export default Login