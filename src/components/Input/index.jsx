import React from 'react'

import {
    IconCotainer,
    InputText,
    InputContainer,
} from './syles'

const Input =({leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
        {leftIcon ? (<IconCotainer>{leftIcon}</IconCotainer>) : null}
        <InputText {...rest}/>
    </InputContainer>
  )
}


export { Input }