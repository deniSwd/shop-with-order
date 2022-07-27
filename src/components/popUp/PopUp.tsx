import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks"
import {displayingPopUp, selectPopUp} from "../../store/mainSlice"
import {useNavigate} from "react-router-dom"
import s from '../popUp/PopUp.module.scss'

export const PopUp: FC = () => {
  const dispatch = useAppDispatch()
  const popUpInfo = useAppSelector(selectPopUp)

  const nav = useNavigate()

  return (
    <div className={s.popUp}>
      <div className={s.textBox}>
        <button onClick={() => {
          dispatch(displayingPopUp(false))
          nav('/', { replace: true })
        }}>Close</button>
        <div>Спасибо {popUpInfo?.name}, ваш заказ {popUpInfo?.orderNumb} оформлен.</div>
        <div>В ближайшее время мы свяжемся с вами по телефону {popUpInfo?.telephone} для его подтверждения.</div>
      </div>
    </div>
  )
}