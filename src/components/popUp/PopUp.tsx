import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks"
import {displayingPopUp, selectPopUp} from "../../store/mainSlice"
import {useNavigate} from "react-router-dom"
import s from '../popUp/PopUp.module.scss'
import cn from "classnames";

export const PopUp: FC = () => {
  const dispatch = useAppDispatch()
  const popUpInfo = useAppSelector(selectPopUp)

  const nav = useNavigate()

  return (
    <div className={s.popUp}>
      <div className={s.textBox}>
        <div className={s.close} onClick={() => {
          dispatch(displayingPopUp(false))
          nav('/', { replace: true })
        }}/>
        <div className={cn(s.text, s.title)}>Спасибо <b>{popUpInfo?.name}</b>, ваш заказ <b>№{popUpInfo?.orderId}</b> оформлен.</div>
        <div className={cn(s.text, s.desc)}>В ближайшее время мы свяжемся с вами по телефону <b>{popUpInfo?.telephone}</b> для его подтверждения.</div>
      </div>
    </div>
  )
}
