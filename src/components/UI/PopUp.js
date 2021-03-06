import React from 'react'
import ReactDOM from 'react-dom'
import styles from './PopUp.module.css'
import Card from './Card'
import Button from './Button'
import PopUpBackground from './PopUpBackground'

const ErrorPopup = (props) => {
  return (
    <PopUpBackground closePopup={props.closePopup}>
      <Card className={styles.card_popup}>
        <div className={styles.container} role='alert'>
          <h2 className={styles.title_header}>{props.title}</h2>
          <p className={styles.p}>{props.message}</p>
          <Button type='button' closePopup={props.closePopup}>Okay</Button>
        </div>
      </Card>
    </PopUpBackground>
  )
}

const PopUp = (props) => {

  const closePopup = () => props.closePopup();

  return (
    <>
    {ReactDOM.createPortal(<ErrorPopup message={props.errorInfo.message} title={props.errorInfo.title} closePopup={closePopup}/>, document.getElementById('error-popup'))}
    </>
  )
}

export default PopUp;