import {FC} from "react";
import s from './Counter.module.scss'
import {ShapedButton} from "../button/ShapedButton";
import cn from "classnames";

type CounterProps = {
  min?: number
  max?: number
  onChange?: (value: number) => void
  value?: number
  className?: string
}

export const Counter: FC<CounterProps> = ({ min = 1, max = 10, value = 1, onChange, className }) => {
  return <div className={cn(s.counter, className)}>
    <ShapedButton shape={'plus'} disabled={value >= max} onClick={() => value < max && onChange?.(value + 1)}/>
    <div className={s.value}>{value}</div>
    <ShapedButton shape={'minus'} disabled={value <= min} onClick={() => value > min && onChange?.(value - 1)}/>
  </div>
}
