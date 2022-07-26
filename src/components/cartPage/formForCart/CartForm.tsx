import {FC, useCallback} from "react"
import {Input} from "./input/MyInput"
import {SubmitHandler, useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import email from '@emailjs/browser'


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
    const templateParams = {
      telephone: data.telephone,
      email: data.email,
      name: data.name,
      rand: 1258
    }
    alert(JSON.stringify(data))
    reset()
    email.send('service_qo99xbs','template_jfri8gu', {...templateParams}, 'Asv5hTc7-2qTnv5Fo')
      .then((response) => {
        console.log(templateParams)
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      })
  }, [reset])



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