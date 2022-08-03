import {FC} from "react"
import s from './ProductInCart.module.scss'
import {ProductType} from "../../../MainTypes"
import {useAppDispatch} from "../../../store/hooks";
import {deleteProductFromCart, setQuantity} from "../../../store/mainSlice";
import {ShapedButton} from "../../button/ShapedButton";
import {Counter} from "../../counter/Counter";

type ProductInCartProps = {
  product: ProductType
}

export const ProductInCart: FC<ProductInCartProps> = ({product}) => {
  const dispatch = useAppDispatch()
  return (
    <div className={s.productInCart}>
      <img src={product.image} alt='product'/>
      <div className={s.name}>{product.name}</div>
      <Counter className={s.counter} value={product.quantity ?? 1} onChange={quantity => dispatch(setQuantity({ id: product.id, quantity }))}/>
      <div className={s.price}>{+product.price * (product.quantity ?? 1)} ₽</div>
      <ShapedButton className={s.remove} shape={'cross'} onClick={() => dispatch(deleteProductFromCart(product.id))}>Удалить</ShapedButton>
    </div>
  )
}
