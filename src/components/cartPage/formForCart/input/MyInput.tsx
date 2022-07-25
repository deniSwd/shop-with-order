import {FC} from "react"
import {Path, UseFormRegister} from "react-hook-form"
import {IFormValues} from "../CartForm"
import InputMask from 'react-input-mask'

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  placeholder: string
  errors: any
  inputTel?: boolean
}

export const Input: FC<InputProps> = ({label, register, placeholder, errors,inputTel}) => {
  const errorMessage = errors[label]?.message
  return (
    <>
      {inputTel
        ? <InputMask  mask="+7(999)999-99-99"
                      {...register(label)}
                      placeholder={placeholder}/>
        : <input {...register(label)} placeholder={placeholder}/>
      }
      <p>{errorMessage}</p>
    </>
  )
}