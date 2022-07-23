export type ProductType = {
  id: number
  image: string
  name: string
  price: string
}
export type ProductsType = {
  products: Array<ProductType>
}