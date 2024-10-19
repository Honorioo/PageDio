import React from 'react'
import { Controller } from "react-hook-form";


import {
    IconCotainer,
    InputText,
    InputContainer,
    ErrorText,
} from './syles'

const Input =({leftIcon, name, control, errorMessage, ...rest}) => {
  return (
    <>
    <InputContainer>
        {leftIcon ? (<IconCotainer>{leftIcon}</IconCotainer>) : null}
      <Controller
        name={name}
        control={control}
        rules={{required: true}}
        render={({ field }) => <InputText {...field} {...rest}/> }
        />
    </InputContainer>
    {errorMessage ? <ErrorText> {errorMessage}</ErrorText> : null}
    </>
  )
}


export { Input }