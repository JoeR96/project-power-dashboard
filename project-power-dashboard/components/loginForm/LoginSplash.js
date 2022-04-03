import React from 'react'
import styles from '../../styles/Login.module.css'
import trollface from '../../public/trollface.png'
import Image from 'next/image'

export const LoginSplash = () => {
    return (
        <div>
            <h1 className={styles.title}>
                Project<span> Power</span>
            </h1>
            <p className={styles.description}>
                Where Thai Green is consumed
            </p>
            <Image
                src={trollface}
            />
        </div>
    )
}
