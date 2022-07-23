import {FC} from "react";
import {useAppSelector} from "../../store/hooks";
import {selectCart} from "../../store/mainSlice";
import {ProductType} from "../../MainTypes";

export const CartPage: FC = () => {
  const cart = useAppSelector(selectCart)
  return (
    <div>
      {cart.map((product: ProductType, i) => <div key={i}>{product.name}</div>)}
    </div>
  )
}