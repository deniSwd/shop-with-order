import {FC, useCallback} from "react"
import {Input} from "./input/MyInput"
import {SubmitHandler, useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {emailSend} from "./emailSend/EmailSend";


export type IFormValues = {
  name: string
  telephone: string
  email: string
}

export const CartForm: FC = () => {

  const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
  const schema = yup.object({
    name: yup.string().min(2, 'Введите не менее 3-х символов').max(20, 'Введите не более 20-ти символов').required('Это поле обязательно'),
    telephone: yup.string().matches(phoneRegExp, 'Некорректный формат телефона').required('Это поле обязательно'),
    email: yup.string().email('Некорректный формат почты').required('Это поле обязательно')
  }).required()


  const {
    register,
    handleSubmit,
    formState: {errors, dirtyFields},
    reset
  } = useForm<IFormValues>({resolver: yupResolver(schema)})
  const onSubmit: SubmitHandler<IFormValues> = useCallback(data => {
    alert(JSON.stringify(data))
    reset()
    emailSend(data)
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
      <button type="submit"
              disabled={!dirtyFields.name || !dirtyFields.email || !dirtyFields.telephone}>
        Оформить заказ
      </button>
    </form>
  )
}