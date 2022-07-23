import {FC} from "react"
import s from './Footer.module.scss'

export const Footer:FC = () =>{
  return(
    <div className={s.footer}>
      Тестовое задание на должность младшего программиста «Лидера поиска», ver. 3.0
    </div>
  )
}