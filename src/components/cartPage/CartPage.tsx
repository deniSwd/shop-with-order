import {FC} from "react"
import {useAppSelector} from "../../store/hooks"
import {selectCart} from "../../store/mainSlice"
import {ProductType} from "../../MainTypes"
import {ProductInCart} from "./productInCart/ProductInCart"
import s from './CartPage.module.scss'

export const CartPage: FC = () => {
  const cart = useAppSelector(selectCart)

  const totalPrice = () => {
    return cart.reduce((sum, product) => sum + Number(product.price), 0)
  }
  return (
    <div className={s.cartPage}>
      <div>Корзина</div>
      {cart.map((product: ProductType, i) => <ProductInCart key={i} product={product}/>)}
      <div>Сумма: {totalPrice()} ₽</div>
      <div>ФОРМА</div>
    </div>
  )
}