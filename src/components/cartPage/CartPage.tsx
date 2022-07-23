import {FC} from "react"
import {useAppSelector} from "../../store/hooks"
import {selectCart} from "../../store/mainSlice"
import {ProductType} from "../../MainTypes"
import {ProductInCart} from "./productInCart/ProductInCart"
import  s from './CartPage.module.scss'

export const CartPage: FC = () => {
  const cart = useAppSelector(selectCart)
  return (
    <div className={s.cartPage}>
      <div>Корзина</div>
      <div>
        {cart.map((product: ProductType, i) => <ProductInCart key={i} product={product}/>)}
      </div>
      <div>Сумма: 3333р</div>
      <div>ФОРМА</div>
    </div>
  )
}