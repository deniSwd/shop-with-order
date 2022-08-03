import {FC} from "react";
import {Button, ButtonProps} from "./Button";
import s from './Button.module.scss'
import cn from "classnames";

interface AddToCartButtonProps extends ButtonProps {
  shape: 'cross' | 'plus' | 'minus'
}

export const ShapedButton: FC<JSX.IntrinsicElements['button'] & AddToCartButtonProps> = ({
                                                                                           shape,
                                                                                           children,
                                                                                           ...props
                                                                                         }) => {
  return <Button {...props} className={cn(s.shaped, s[shape], props.className)}>{children}</Button>
}

