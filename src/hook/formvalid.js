import {useReducer} from 'react'

const initialState ={
    value:'',
    touched:false
}

const formReducer =(state,action)=>{
    if(action.type === 'INPUT'){
        return {value:action.value,touched:state.touched}
    }
    if(action.type === 'BLUR'){
        return {value:state.value,touched:true}
    }
    if(action.type === 'RESET'){
        return {value:'',touched:false}
    }
    return state
}



const FormValid =(valueValidate)=>{
const [state,dispatch]=useReducer(formReducer,initialState)
const inputChange =(event)=>{
    dispatch({type:'INPUT',value:event.target.value})
}

const blurChange =()=>{
    dispatch({type:'BLUR'})
}

const reset =()=>{
    dispatch({type:'RESET'})
}
const valid = valueValidate(state.value)
const hasError = !valid && state.touched
    return {
     inputChange:inputChange,
     blurChange:blurChange,
     reset:reset,
     error:hasError,
     value:state.value,
     touched:state.touched
    }
}

export default FormValid