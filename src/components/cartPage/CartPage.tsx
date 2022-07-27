import {FC, useCallback, useEffect} from "react"
import {useAppSelector} from "../../store/hooks"
import {selectCart} from "../../store/mainSlice"
import {ProductType} from "../../MainTypes"
import {ProductInCart} from "./productInCart/ProductInCart"
import s from './CartPage.module.scss'
import {Navigate, useNavigate} from "react-router-dom";
import {CartForm} from "./formForCart/CartForm";

export const CartPage: FC = () => {
  const cart = useAppSelector(selectCart)

  const totalPrice = useCallback(() => {
    return cart.reduce((sum, product) => sum + Number(product.price), 0)
  },[cart])
  
  const nav = useNavigate()
  
  useEffect(() => {
    if (cart.length === 0) nav('/', { replace: true })
  }, [cart.length, nav])

  return (
    <div className={s.cartPage}>
      <div>Корзина</div>
      {cart.map((product: ProductType, i) => <ProductInCart key={i} product={product}/>)}
      <div>Сумма: {totalPrice()} ₽</div>
      <CartForm/>
    </div>
  )
}