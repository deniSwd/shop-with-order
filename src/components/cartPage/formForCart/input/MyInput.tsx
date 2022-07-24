import {FC} from "react"
import {Path, UseFormRegister} from "react-hook-form";
import {IFormValues} from "../CartForm";

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
}

export const Input:FC<InputProps> = ({label, register}) => {
  return (
    <>
      <input {...register(label)} placeholder={label}/>
    </>
  )
}