import s from "./CartLink.module.scss"
import cartImg from "../../../assets/cart.png"
import {FC} from "react"
import {useAppSelector} from "../../../store/hooks";
import {selectCart} from "../../../store/mainSlice";

export const CartLink: FC = () => {
  const cart = useAppSelector(selectCart)
  return (
    <div className={s.cartLink}>
      <div className={s.cartImg}>
        <img src={cartImg} alt='cart'/>
      </div>
      <div className={s.name}>Корзина</div>
      <div className={s.cartLength}>{cart.length}</div>
    </div>
  )
}