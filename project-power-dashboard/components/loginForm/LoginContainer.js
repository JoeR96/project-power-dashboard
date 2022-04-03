import React, { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

export default function LoginContainer() {
    const [showLogin, setShowLogin] = React.useState(true)
    const setReg = () => setShowLogin(showLogin => !showLogin)

    useEffect(() => {
        console.log(showLogin)
    }, [showLogin])
    return (
        showLogin ? <LoginForm eventHandler={setReg} />
            : <RegistrationForm eventHandler={setReg} />
    )
}
