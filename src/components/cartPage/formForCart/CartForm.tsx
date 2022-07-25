import {FC, useCallback} from "react"
import {Input} from "./input/MyInput"
import {SubmitHandler, useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";

export type IFormValues = {
  name: string
  telephone: string
  email: string
}
const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
export const CartForm: FC = () => {
  const schema = yup.object({
    name: yup.string().min(2).max(20).required(),
    telephone: yup.string().matches(phoneRegExp).required(),
    email: yup.string().email().required()
  }).required()

  const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormValues>({resolver: yupResolver(schema)})
  const onSubmit: SubmitHandler<IFormValues> = useCallback(data => {
    alert(JSON.stringify(data))
    reset()
  }, [reset])
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label='name'
             register={register}
             placeholder='Ваше имя'
             errors={errors}/>
      <Input label='telephone'
             register={register}
             placeholder='Телефон'
             errors={errors}
             inputTel={true}/>
      <Input label='email'
             register={register}
             placeholder='Email'
             errors={errors}/>
      <input type="submit"/>
    </form>
  )
}