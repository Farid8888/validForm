import classes from './Basic.module.css'
import {useState,useRef} from 'react'


const BasicForm =()=>{
const [firstname,setFirstName] =useState('')    
const [firstNameValid,setFirstNameValid] = useState(false)
const [lastName,setLastName] = useState('')
const [lastNameValid,setLastNameValid] = useState(false)
const [email,setEmail] = useState('')
const [emailValid,setEmailValid] = useState(false)
const [formValid,setFormValid] = useState(false)

const onChangeFirstName =(event)=>{
setFirstName(event.target.value)
}

let classesfirstName
let content
classesfirstName = firstNameValid ? `${classes.inputForm} ${classes.changefirstName}` : classes.inputForm
 content = firstNameValid  ? <p className={classes.invalid}>Please enter the first name</p> : ''


if(firstname.length > 0){
    content = ''
    classesfirstName = classes.inputForm
}


const onBlurFirstName =()=>{
    if(firstname.length>0){
        setFirstNameValid(false)
    }else{
        setFirstNameValid(true)
    }
    
}


const onChangeLastName =(event)=>{
    setLastName(event.target.value)
    }


let classesLastName
let content2
classesLastName = lastNameValid ? `${classes.inputForm} ${classes.changefirstName}` : classes.inputForm
 content2 = lastNameValid  ? <p className={classes.invalid}>Please enter the first name</p> : ''


if(lastName.length > 0){
    content2 = ''
    classesLastName = classes.inputForm
}


const onBlurLastName =()=>{
    if(lastName.length>0){
        setLastNameValid(false)
    }else{
        setLastNameValid(true)
    }
    
}


const onChangeEmailName =(event)=>{
    setEmail(event.target.value)
    }


let classesEmailName
let content3
classesEmailName = emailValid ? `${classes.inputForm} ${classes.changefirstName}` : classes.inputForm
 content3 = emailValid  ? <p className={classes.invalid}>Please enter the first name</p> : ''


if(email.length > 0){
    content3 = ''
    classesEmailName = classes.inputForm
}


const onBlurEmailName =()=>{
    if(email.length>0){
        setEmailValid(false)
    }else{
        setEmailValid(true)
    }
    
}
let classesButton =classes.btn
if(firstname.trim().length>0 && lastName.trim().length>0 && email.trim().length>0){
    classesButton =  `${classes.btn} ${classes['valid-button']}`
}



    return(
      <form className={classes.form}>
          <div className={classes.control}>
          <div className={classesfirstName}>
              <label>First Name</label>
              <input type='text' onChange={onChangeFirstName}  onBlur={onBlurFirstName}/>
              {content}
          </div>
          <div className={classesLastName}>
              <label>Last Name</label>
              <input type='text' onChange ={onChangeLastName} onBlur={onBlurLastName}/>
              {content2}
          </div>
          </div>
          <div className={classesEmailName}>
              <label>E-Mail Address</label>
              <input type='email' onChange={onChangeEmailName} onBlur={onBlurEmailName}/>
              {content3}
          </div>
          <div className={classesButton}>
              <button type='submit'>Submit</button>
          </div>
      </form>
    )
}


export default BasicForm