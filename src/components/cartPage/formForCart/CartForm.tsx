import {FC} from "react"
import {Input} from "./input/MyInput"
import {SubmitHandler, useForm} from "react-hook-form"

export type IFormValues ={
  name: string
  telephone: string
  email: string
}

export const CartForm:FC =()=> {

  const { register, handleSubmit } = useForm<IFormValues>()
  const onSubmit: SubmitHandler<IFormValues> = data => {
    alert(JSON.stringify(data));
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label='name' register={register}/>
      <Input label='telephone' register={register}/>
      <Input label='email' register={register}/>
      <input type="submit" />
    </form>
  )
}