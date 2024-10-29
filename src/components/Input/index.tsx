import React from 'react'
import { Controller } from "react-hook-form";
import { IInput } from './types'; 


import {
    IconCotainer,
    InputText,
    InputContainer,
    ErrorText,
} from './syles'

const Input =({leftIcon, name, control, errorMessage, ...rest}: IInput) => {
  return (
    <>
    <InputContainer>
        {leftIcon ? (<IconCotainer>{leftIcon}</IconCotainer>) : null}
      <Controller
        name={name}
        control={control}
        rules={{required: true}}
        render={({ field: {value, onChange} }) => (<InputText value={value} onChange={onChange} {...rest}/>) }
        />
    </InputContainer>
    {errorMessage ? <ErrorText> {errorMessage}</ErrorText> : null}
    </>
  )
}


export { Input }