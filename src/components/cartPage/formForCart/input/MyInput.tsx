import {FC} from "react"
import {Path, UseFormRegister} from "react-hook-form"
import {IFormValues} from "../CartForm"
import InputMask from 'react-input-mask'
import s from './MyInput.module.scss'
import cn from "classnames";

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  placeholder: string
  errors: any
  inputTel?: boolean
}

export const Input: FC<InputProps> = ({label, register, placeholder, errors, inputTel}) => {
  return (
    <div className={s.inputWrapper}>
      {inputTel
        ? <InputMask mask="+7 (999) 999-99-99"
                     {...register(label)}
                     placeholder={placeholder} className={cn(s.input, errors[label]?.message && s.error)}/>
        : <input className={cn(s.input, errors[label]?.message && s.error)} {...register(label)} placeholder={placeholder}/>
      }
      <span className={s.errMsg}>{errors[label]?.message}</span>
    </div>
  )
}
