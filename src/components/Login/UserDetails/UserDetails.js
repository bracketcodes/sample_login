import React from 'react'
import styles from './UserDetails.module.css'

const userDetails = (props) => {

    return(
        <div className={styles.detail}>
            <label>{props.label}</label>
            <div className={styles.inputBlock}>
                <input type='text' onChange={props.changed}/>
            </div>
        </div>
    )
}

export default userDetails
    