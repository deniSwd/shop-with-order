import {FC, useEffect, useMemo} from "react"
import {useAppSelector} from "../../store/hooks"
import {selectCart} from "../../store/mainSlice"
import {ProductType} from "../../MainTypes"
import {ProductInCart} from "./productInCart/ProductInCart"
import s from './CartPage.module.scss'
import {useNavigate} from "react-router-dom";
import {CartForm} from "./formForCart/CartForm";
import {Content} from "../Content";

export const CartPage: FC = () => {
  const cart = useAppSelector(selectCart)

  const totalPrice = useMemo(() => cart.reduce((sum, product) => sum + +product.price * product.quantity, 0), [cart])

  const nav = useNavigate()

  useEffect(() => {
    if (cart.length === 0) nav('/', {replace: true})
  }, [cart.length, nav])

  return (
    <div className={s.cartPage}>
      <Content className={s.cartContent}>
        <div className={s.cart}>Корзина</div>
        {cart.map((product: ProductType, i) => <ProductInCart key={i} product={product}/>)}
        <div className={s.total}>Сумма: {totalPrice} ₽</div>
      </Content>
      <CartForm/>
    </div>
  )
}
