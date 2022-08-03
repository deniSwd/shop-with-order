import {FC, ReactNode} from "react";

export const Content: FC<{children: ReactNode, className?: string}> = ({ children, className }) => {
  return <section style={{ maxWidth: '1170px', margin: '0 auto' }} className={className}>{children}</section>
}
