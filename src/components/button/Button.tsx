import {FC} from "react";
import s from './Button.module.scss'
import cn from "classnames";

export interface ButtonProps {
  primary?: boolean
}

export const Button: FC<JSX.IntrinsicElements['button'] & ButtonProps> = ({primary, ...props}) => {
  return <button {...props} className={cn(props.className, primary && s.primary)}/>
}
