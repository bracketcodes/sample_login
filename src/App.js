import React from 'react';
import styles from './App.module.css';
import Login from './components/Login/Login'
import {Fragment} from 'react'

function App() {

  const userDetails = [
      {userName: 'danush', password: '12345'},
      {userName: 'shankar', password: '12345'}
    ]
  
  let userName = ''
  let password = ''

  const onUserNameChange = (event) => {
    userName = event.target.value
  }

  const onpasswordChange = (event) => {
    password = event.target.value
  }

  const handleSubmit = () => {
      const userNameList = userDetails.map((details) =>{
        return details.userName
      }) 

      if(userNameList.includes(userName)){
        const index = userNameList.findIndex((element) => {
            return element === userName
        })  
        
        if(userDetails[index].password === password) {
          window.alert('logged in successfully')
        } else {
          window.alert('username or password is incorrect')
        }
      }else {
        window.alert('username or password is incorrect')
      }
      
    }

  return (
    <Fragment>
      <div className={styles.header}>
      </div>
      <div className={styles.App}>
          <Login userDetails={userDetails}
                 submit={handleSubmit}
                 userNameChanged={onUserNameChange}
                 passwordChanged={onpasswordChange}/>
      </div>
      <div className={styles.footer}>
      </div>
    </Fragment>
  );
}

export default App;
