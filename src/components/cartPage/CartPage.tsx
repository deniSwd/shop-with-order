import {FC} from "react"
import {useAppSelector} from "../../store/hooks"
import {selectCart} from "../../store/mainSlice"
import {ProductType} from "../../MainTypes"
import {ProductInCart} from "./productInCart/ProductInCart"
import s from './CartPage.module.scss'
import {Navigate} from "react-router-dom";

export const CartPage: FC = () => {
  const cart = useAppSelector(selectCart)

  const totalPrice = () => {
    return cart.reduce((sum, product) => sum + Number(product.price), 0)
  }
  if (cart.length === 0) {
    return <Navigate to='/'/>
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