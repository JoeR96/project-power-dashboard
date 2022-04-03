import React from 'react'
import { useForm } from "react-hook-form";
import styles from '../../styles/Login.module.css'
import { Button, FormLabel, Input } from '@mui/material';
export default function LoginForm({ eventHandler }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(eventHandler);
    return (
        <form
            className={styles.loginForm}
            onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputContainer}>
                <FormLabel
                    style={{ color: 'white' }}>
                    Username/Email
                </FormLabel>
                <div className={styles.inputDiv}>
                    <Input className={styles.input}{...register("email")} />
                </div>
                <FormLabel
                    style={{ color: 'white' }}>
                    Password
                </FormLabel>
                <div className={styles.inputDiv}>

                    <Input className={styles.input}{...register("password")} />
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
