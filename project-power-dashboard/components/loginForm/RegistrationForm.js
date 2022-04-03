import React, { useEffect } from 'react'
import { useForm, Controller, useFormState } from "react-hook-form";
import styles from '../../styles/Login.module.css'
import { Button, FormLabel, TextField } from '@mui/material';
import axios from 'axios';

export default function RegistrationForm({ eventHandler }) {

    //const onSubmit = data => console.log(data);
    function onSubmit(data) {
        axios.post('http://projectpower.bigdave.fun/api/login', data)
            .then(res => console.log(res))

    }
    const { handleSubmit, register, formState: { errors } } = useForm();
    console.log(errors)
    return (
        <form
            className={styles.loginForm}
            onSubmit={handleSubmit(onSubmit)}>

            <div className={styles.inputContainer}>
                <div className={styles.inputDiv}>
                    <FormLabel
                        style={{
                            color: '#FF6700',
                            alignContent: 'center'
                        }} chr
                    >

                        Username
                    </FormLabel>
                    <input
                        style={{ color: '' }}
                        {...register("username", {
                            required: 'Enter a username',
                            minLength: {
                                value: 3,
                                message: 'Enter a username longer than 3 characters'
                            },
                            maxLength: {
                                value: 15,
                                message: 'Enter a username shorter than 15 characters'
                            }
                        })} />
                    <p style={{ color: '#FAFAFA' }}>{errors.username?.message}</p>
                </div>
                <div className={styles.inputDiv}>
                    <FormLabel
                        style={{
                            color: '#FF6700',
                            alignContent: 'center'
                        }} chr
                    >

                        Email
                    </FormLabel>
                    <input
                        style={{ color: '' }}
                        {...register("email", {
                            required: 'Enter an email',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })} />
                    <p style={{ color: '#FAFAFA' }}>{errors.email?.message}</p>
                </div>
                <div className={styles.inputDiv}>
                    <FormLabel
                        style={{
                            color: '#FF6700',
                            alignContent: 'center'
                        }} chr
                    >

                        Password
                    </FormLabel>
                    <input
                        style={{ color: '' }}
                        {...register("password", {
                            required: 'Enter a password',
                            minLength: {
                                value: 6,
                                message: 'Enter a password longer than 6 characters'
                            },
                            maxLength: {
                                value: 15,
                                message: 'Enter a password shorter than 15 characters'
                            }
                        })} />
                    <p style={{ color: '#FAFAFA' }}>{errors.password?.message}</p>
                </div>
            </div>
            <Button
                className={styles.registerButton}
                variant='outlined'
                type="submit"
            >
                Register
            </Button>
            <Button
                className={styles.registerButton}
                variant='outlined'
                onClick={() => eventHandler()}
            >
                Go Back
            </Button>

        </form>
    )
}
