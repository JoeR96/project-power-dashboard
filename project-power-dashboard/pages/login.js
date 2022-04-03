import React from 'react'
import styles from '../styles/Login.module.css'
import LoginContainer from '../components/loginForm/LoginContainer'
import { LoginSplash } from '../components/loginForm/LoginSplash'

const login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loginContainerLeft}>
                <LoginSplash />
            </div>
            <div className={styles.loginContainerRight}>
                <LoginContainer />
            </div>
        </div>
    )
}

export default login;
