import React from 'react'
import { useForm } from "react-hook-form";
import styles from '../../styles/Login.module.css'
import { Button, FormLabel, Input, Radio } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
export default function LoginForm({ eventHandler }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showUsername,SetShowUsername] = React.useState(true)
    const router = useRouter();
    function onSubmit(data) {
        console.log(data)
        axios.post('https://localhost:44317/api/login', data)
            .then((response) => {
                localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
                router.push('/dashboard')
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <form
            className={styles.loginForm}
            onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputContainer}>
                
                <div className={styles.inputDiv}>    
                    <FormLabel
                        className={styles.FormLabel}>
                        Email Address
                    </FormLabel>    
                     <Input
                        className={styles.FormInput}
                        {...register("EmailAddress", {
                            required: 'Enter an email',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })} />
                </div>
                <p style={{ color: 'red' }}>{errors.EmailAddress?.message}</p>
                <div className={styles.inputContainer}>

               
                    <div className={styles.inputDiv}>
                        <FormLabel
                            className={styles.FormLabel}>
                            Password
                        </FormLabel>
                    <Input
                        className={styles.FormInput}
                        {...register("password",
                            {
                                required: 'Enter a password',
                                minLength: {
                                    value: 3,
                                    message: 'Enter a password longer than 3 characters'
                                },
                                maxLength: {
                                    value: 15,
                                    message: 'Enter a password shorter than 15 characters'
                                }
                            }
                        )} />
                    </div>
                    <p style={{ color: 'red' }}>{errors.password?.message}</p>
                    </div>
                <div>
                    <Button
                        className={styles.loginButton}
                        variant='contained' type="submit">
                        Login
                    </Button>
                    <Button
                        className={styles.registerButton}
                        variant='outlined'
                        onClick={() => eventHandler()}
                    >
                        Register
                    </Button>
                   
                </div>
            </div>
        </form>
    )
}
