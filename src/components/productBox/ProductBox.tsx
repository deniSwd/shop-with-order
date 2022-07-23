import {FC} from "react"
import {ProductType} from "../../MainTypes"
import s from './ProductBox.module.scss'

type ProductProps ={
  product: ProductType
}

export const Product:FC<ProductProps> =({product})=> {
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
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}