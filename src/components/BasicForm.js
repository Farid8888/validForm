import classes from './Basic.module.css'
import {useState,useRef} from 'react'
import FormValid from '../hook/formvalid'

const BasicForm =()=>{
const nameValidate = (value)=> value.trim().length > 0
const emailValidate =(value)=> value.includes('@')
   const {
     inputChange:firstNameChange,
     blurChange:firstNameBlur,
     reset:firstNameReset,
     error:firstNameError,
     value:firstNameValue,
     touched:firstNameTouched
   } = FormValid(nameValidate)

   const {
    inputChange:lastNameChange,
    blurChange:lastNameBlur,
    reset:lastNameReset,
    error:lastNameError,
    value:lastNameValue,
    touched:lastNameTouched
  } = FormValid(nameValidate)

  const {
    inputChange:emailChange,
    blurChange:emailNameBlur,
    reset:emailReset,
    error:emailError,
    value:emailValue,
    touched:emailTouched
  } = FormValid(emailValidate)



let classesFirstName 
classesFirstName = firstNameError ? `${classes.inputForm} ${classes.changefirstName}` : classes.inputForm
let classesLastName
classesLastName = lastNameError ? `${classes.inputForm} ${classes.changefirstName}` : classes.inputForm
let classesEmail
classesEmail = emailError ?  `${classes.inputForm} ${classes.changefirstName}` : classes.inputForm





const firstNameValid = nameValidate(firstNameValue)
const lastNameValid = nameValidate(lastNameValue)
const emailValid = emailValidate(emailValue)


let classesButton =classes.btn
if(firstNameValid && lastNameValid && emailValid){
    classesButton =  `${classes.btn} ${classes['valid-button']}`
}


const validate = firstNameValue && lastNameValid && emailValid
const onSubmitHandler =(event)=>{
event.preventDefault()
if(!validate){
    return
}
firstNameReset()
lastNameReset()
emailReset()
}

    return(
      <form className={classes.form} onSubmit={onSubmitHandler}>
          <div className={classes.control}>
          <div className={classesFirstName}>
              <label>First Name</label>
              <input type='text' value={firstNameValue} onChange={firstNameChange}  onBlur={firstNameBlur}/>
              {firstNameError ? <p className={classes.invalid}>Please enter the first name</p> : ''}
          </div>
          <div className={classesLastName}>
              <label>Last Name</label>
              <input type='text' value={lastNameValue} onChange ={lastNameChange} onBlur={lastNameBlur}/>
              {lastNameError ? <p className={classes.invalid}>Please enter the first name</p> : ''}
          </div>
          </div>
          <div className={classesEmail}>
              <label>E-Mail Address</label>
              <input type='email' value={emailValue} onChange={emailChange} onBlur={emailNameBlur}/>
              {emailError ? <p className={classes.invalid}>Please enter the first name</p> : ''}
          </div>
          <div className={classesButton}>
              <button type='submit'>Submit</button>
          </div>
      </form>
    )
}


export default BasicForm