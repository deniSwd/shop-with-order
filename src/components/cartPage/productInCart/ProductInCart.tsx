import {FC} from "react"
import  s from  './ProductInCart.module.scss'
import {ProductType} from "../../../MainTypes"
import {useAppDispatch} from "../../../store/hooks";
import {deleteProductFromCart} from "../../../store/mainSlice";

type ProductInCartProps = {
  product: ProductType
}

export const ProductInCart:FC<ProductInCartProps> =({product}) =>{
  const dispatch = useAppDispatch()
  return (
    <div className={s.productInCart}>
      <div>
        <img src={product.image} alt='product'/>
      </div>
      <div>{product.name}</div>
      <div>counter</div>
      <div>{product.price} ₽</div>
      <button onClick={()=>dispatch(deleteProductFromCart(product.id)) }>X</button>
    </div>
  )
}