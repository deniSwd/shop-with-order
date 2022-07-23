import {FC} from "react"
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import  s from './Header.module.scss'

export const Header: FC = () => {
  return (
    <div className={s.header}>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div className={s.cart}>
        <div>
          <img src={cart} alt='cart' />
        </div>
        <div>Корзина</div>
        <div>5</div>
      </div>
    </div>
  )
}