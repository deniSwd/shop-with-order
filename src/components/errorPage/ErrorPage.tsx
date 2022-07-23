import {FC} from "react"

type ErrorPageProps ={
  message:string
}

export  const Error:FC<ErrorPageProps> =({message})=> {
  return (
    <div>
      {message}
    </div>
  )
}