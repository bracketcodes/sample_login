import React from 'react'
import styles from './Login.module.css'
import UserDetails from './UserDetails/UserDetails'

const login = (props) => {

    const labels = [
        {id:'123', label: 'username', changed: props.userNameChanged},
        {id:'234', label: 'password', changed: props.passwordChanged}]

    const userDetails = labels.map((label) => {
        return <UserDetails
                key={label.id} 
                label={label.label}
                changed={label.changed}/>
    }) 
    
    return (
        <div className={styles.inputContainer}>
            <form className={styles.loginForm}>
                <div className={styles.mainHeader}>
                    <h1>Login</h1>
                </div>
                {userDetails}
                <div className={styles.buttonContainer}>
                    <button type='button' onClick={props.submit}>login</button>
                </div>
            </form>
        </div>
    )
}

export default login
