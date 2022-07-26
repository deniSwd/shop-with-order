import axios from "axios";
import {ProductsType} from "../MainTypes";

const instance = axios.create({
  baseURL: `/products.json`
})
export const userApi = {
  getProducts():Promise<ProductsType> {
    return instance.get<ProductsType>(``).then(res=>res.data)
  }
}