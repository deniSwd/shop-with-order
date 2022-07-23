import s from "./CartLink.module.scss"
import cartImg from "../../../assets/cart.png"
import {FC} from "react"
import {useAppSelector} from "../../../store/hooks";
import {selectCart} from "../../../store/mainSlice";

export const CartLink: FC = () => {
  const cart = useAppSelector(selectCart)
  return (
    <div className={s.cartLink}>
      <div>
        <img src={cartImg} alt='cart'/>
      </div>
      <div>Корзина</div>
      <div>{cart.length}</div>
    </div>
  )
}