import {FC, useMemo} from "react"
import {ProductType} from "../../../MainTypes"
import s from './ProductBox.module.scss'
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {addProductInCart, selectCart} from "../../../store/mainSlice";
import {Button} from "../../button/Button";
import {AddToCartButton} from "../../button/AddToCartButton";

type ProductProps = {
  product: ProductType
}

export const ProductBox: FC<ProductProps> = ({product}) => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectCart)
  const alreadyInCart = useMemo(() => products.some(p => p.id === product.id), [products, product])
  return (
    <div className={s.productBox}>
      <div>
        <img src={product.image} alt='product'/>
      </div>
      <div className={s.name}>
        {product.name}
      </div>
      <div className={s.price}>
        {product.price} ₽
      </div>
      <AddToCartButton active={alreadyInCart} onClick={() => dispatch(addProductInCart(product.id))}/>
    </div>
  )
}
