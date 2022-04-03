import React, { useEffect } from 'react'
import { useForm, Controller, useFormState } from "react-hook-form";
import styles from '../../styles/Login.module.css'
import { Button, FormLabel, Input } from '@mui/material';
import axios from 'axios';
import { fontWeight } from '@mui/system';

export default function RegistrationForm({ eventHandler }) {

    //const onSubmit = data => console.log(data);
    function onSubmit(data) {
        axios.post('https://localhost:44317/UserAccounts', data)
            .then((response) => {
                eventHandler();
            }, (error) => {
                console.log(error);
            });
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
                        className={styles.FormLabel}
                    >
                        Username
                    </FormLabel>
                    <Input
                        className={styles.FormInput}
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
                    <p style={{ color: 'red' }}>{errors.username?.message}</p>
                </div>
                <div className={styles.inputDiv}>
                    <FormLabel
                        className={styles.FormLabel}
                    >

                        Email
                    </FormLabel>
                    <Input
                        className={styles.FormInput}
                        {...register("email", {
                            required: 'Enter an email',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })} />
                    <p style={{ color: 'red' }}>{errors.email?.message}</p>
                </div>
                <div className={styles.inputDiv}>
                    <FormLabel
                        className={styles.FormLabel}
                    >
                        Password
                    </FormLabel>

                    <Input
                        className={styles.FormInput}
                        type='password'
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
                    <p style={{ color: 'red' }}>{errors.password?.message}</p>
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
