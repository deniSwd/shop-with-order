import {FC} from "react"
import s from './Footer.module.scss'
import {Content} from "../Content";

export const Footer:FC = () =>{
  return(
    <Content>
      <footer className={s.footer}>
        <span className={s.text}>Тестовое задание на должность младшего программиста «Лидера поиска», ver. 3.0</span>
      </footer>
    </Content>
  )
}
