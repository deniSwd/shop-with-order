import {FC, useCallback} from "react"
import {Input} from "./input/MyInput"
import {SubmitHandler, useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {emailSend} from "./emailSend/EmailSend";
import {useAppDispatch} from "../../../store/hooks";
import {displayingPopUp, setPopUp} from "../../../store/mainSlice";
import {Button} from "../../button/Button";
import s from './CartForm.module.scss'
import {PopUpInfo} from "../../../MainTypes";


export interface IFormValues {
  name: string
  telephone: string
  email: string
}

const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
const schema = yup.object({
  name: yup.string().min(2, 'Введите не менее 2-х символов').max(20, 'Введите не более 20-ти символов').required('Это поле обязательно'),
  telephone: yup.string().matches(phoneRegExp, 'Некорректный формат телефона').required('Это поле обязательно'),
  email: yup.string().email('Некорректный формат почты').required('Это поле обязательно')
}).required()

export const CartForm: FC = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: {errors, dirtyFields}
  } = useForm<IFormValues>({resolver: yupResolver(schema)})
  const onSubmit: SubmitHandler<IFormValues> = useCallback(data => {
    const id = Math.floor(Math.random() * 1000)
    const popUpInfo: PopUpInfo = {
      name: data.name,
      orderId: id,
      telephone: data.telephone
    }
    emailSend(data, id)
    dispatch(setPopUp(popUpInfo))
    dispatch(displayingPopUp(true))
  }, [])


  return (
    <div className={s.formWrapper}>
      <h1>Пожалуйста, представьтесь</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
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
        <Button primary type="submit" className={s.submit}
                disabled={!dirtyFields.name || !dirtyFields.email || !dirtyFields.telephone}>
          Оформить заказ
        </Button>
      </form>
    </div>
  )
}
