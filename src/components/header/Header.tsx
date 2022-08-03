import {FC} from "react"
import logo from '../../assets/logo.png'
import s from './Header.module.scss'
import {useAppSelector} from "../../store/hooks";
import {selectCart} from "../../store/mainSlice";
import {CartLink} from "./cartLink/CartLink";
import {NavLink} from "react-router-dom";
import {Content} from "../Content";

export const Header: FC = () => {
  const cart = useAppSelector(selectCart)
  return (
    <Content>
      <header className={s.header}>
        <img className={s.logo} src={logo} alt='logo'/>
        {cart.length > 0
          ? <NavLink to={'/cartPage'} className={s.nav}>
            <CartLink/>
          </NavLink>
          : <CartLink/>}
      </header>
    </Content>
  )
}
