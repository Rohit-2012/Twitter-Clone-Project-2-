import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './signIn.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'


export default function SignIn() {


    const navigate = useNavigate()
    function handleSignIn() {

    }

    return (

        <div className={styles.main}>
            <center className={styles.container}>
                <h1>Sign in to Twitter</h1>
                <div className={styles.field}>
                    <TextField label="Email" variant="outlined" />

                </div>
                <div className={styles.field}>
                    <TextField  label="Password" variant="outlined" />

                </div>
                <Button onClick={handleSignIn}
                    variant='contained'
                >sign in</Button>
                <p>Don't have an account? <Button onClick={() => navigate('/signIn')}>Sign up</Button> </p>

            </center>
        </div>


    )

}