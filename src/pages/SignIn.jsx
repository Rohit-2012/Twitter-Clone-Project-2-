import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './signIn.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'


export default function SignIn() {

    const [emailError, setEmailError] = useState(true)
    const [loginMail, setLoginMail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [found, setFound] = useState(true)

    const [passwordError, setPasswordError] = useState(true)

    const navigate = useNavigate()

    // const data = [{ email: 'suddakuntivinay7877@gmail.com', password: 'vinay.s7877@A' }]
    // localStorage.setItem('userData', JSON.stringify([...data]))





    function handleSignIn() {

        const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!regEmail.test(loginMail) || loginMail == '' || loginPassword == '') {
            if (!regEmail.test(loginMail)) {
                setEmailError(false);
            }
            else {
                setEmailError(true)
            }

            if (loginPassword == '') {
                setPasswordError(false)
            }
            else {
                setPasswordError(true)
            }


        } else {


            const userData = JSON.parse(localStorage.getItem('userData'))
            if (userData != null) {

                let exist = false

                for (let i = 0; i < userData.length; i++) {

                    if (userData[i].email == loginMail && userData[i].password == loginPassword) {
                        exist = true
                        break
                    }
                }

                if (exist) {

                    alert('Successfully Logged In')
                    setLoginMail('')
                    setLoginPassword('')

                    navigate('/')

                } else {
                    setFound(false)

                    setPasswordError(true)
                    setLoginMail('')
                    setLoginPassword('')

                }
            } else {
                setFound(false)
                setLoginMail('')
                setLoginPassword('')

            }
        }
    }

    return (

        <div className={styles.main}>
            <center className={styles.container}>
                <h1>Sign in to Twitter</h1>
                <div className={styles.field}>
                    <TextField label="Email" variant="outlined"
                        onChange={(event) => setLoginMail(event.target.value)}
                        value={loginMail}
                    />
                    {emailError ? '' : <p className={styles.error}>Enter the valid Mail</p>}

                </div>
                <div className={styles.field}>
                    <TextField label="Password" variant="outlined"
                        onChange={(event) => setLoginPassword(event.target.value)}
                        value={loginPassword}
                    />
                    {
                        passwordError ? '' : <p className={styles.error}>Please enter the password</p>
                    }

                </div>
                <Button onClick={handleSignIn}
                    variant='contained'
                >sign in</Button>
                {
                    found ? '' : <p className={styles.error}>User details not found please <Button onClick={() => navigate('/signUp')}>Register</Button></p>
                }
                <p>Don't have an account? <Button onClick={() => navigate('/signUpn')}>Sign up</Button> </p>

            </center>
        </div>


    )

}