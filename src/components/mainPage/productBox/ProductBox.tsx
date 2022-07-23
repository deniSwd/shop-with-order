import {FC} from "react"
import {ProductType} from "../../../MainTypes"
import s from './ProductBox.module.scss'
import {useAppDispatch} from "../../../store/hooks";
import {addProductInCart} from "../../../store/mainSlice";

type ProductProps ={
  product: ProductType
}

export const Product:FC<ProductProps> =({product})=> {
  const dispatch = useAppDispatch()
  return(
    <div className={s.productBox}>
      <div>
        <img src={product.image} alt='product'/>
      </div>
      <div>
        {product.name}
      </div>
      <div>
        {product.price}
      </div>
      <div>
        <button onClick={()=>dispatch(addProductInCart(product.id))}>Добавить в корзину</button>
      </div>
    </div>
  )
}