import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import FormContext from '../context/FormContext';

const Input = ({fieldType, fiedlPlaceHolder, fieldPattern, fieldErrorMsg}) => {

    const formContext = useContext(FormContext);


    function handleChange(e)
    {
        let pattern = new RegExp(fieldPattern);
        (!pattern.test(e.target.value)) 
        ? toast.error(fieldErrorMsg)
        : formContext((prev)=>({...prev, totalQuestions: e.target.value}))
    }

  return (

    <input type={fieldType} placeholder={fiedlPlaceHolder} onBlur={handleChange}/>

  )
}

export default Input