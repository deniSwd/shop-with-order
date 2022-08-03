import {FC} from "react";
import {Button} from "./Button";
import cn from "classnames";
import s from "./Button.module.scss";

type AddToCartButtonProps = {
  active: boolean
}

export const AddToCartButton: FC<JSX.IntrinsicElements['button'] & AddToCartButtonProps> = ({active, ...props}) => {
  return <Button {...props} className={cn(props.className, active && s.clicked)} disabled={active} primary>
    {active ? 'В корзине' : 'Добавить в корзину'}
  </Button>
}
