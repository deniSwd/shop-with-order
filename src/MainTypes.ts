export type ProductType = {
  id: number
  image: string
  name: string
  price: number
  quantity: number
}
export type ProductsType = {
  products: Array<ProductType>
}
export type PopUpInfo = {
  name: string
  orderId: number
  telephone: string
}
