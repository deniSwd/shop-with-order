import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppThunk, RootState} from './store'
import {userApi} from "../shopAPI/api";
import {ProductsType, ProductType} from "../MainTypes";

export type ShopStateType = {
  products: Array<ProductType>
  error: string
  cart: Array<ProductType>
}

const initialState: ShopStateType = {
  products: [],
  error: '',
  cart: []
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductsType>) => {
      state.products = action.payload.products
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    addProductInCart: (state, action: PayloadAction<number>) => {
      const selectedProduct = state.products?.find(i => i.id === action.payload)
      if (!selectedProduct) return
      state.cart.push(selectedProduct)
    },
    deleteProductFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(i => i.id !== action.payload)
    }
  },
})

export const {setProducts, setError,addProductInCart,deleteProductFromCart} = mainSlice.actions

export const selectProducts = (state: RootState) => state.main.products
export const selectError = (state: RootState) => state.main.error
export const selectCart = (state: RootState) => state.main.cart


export const getAllProducts = (): AppThunk =>
  async (dispatch) => {
    try {
      const products = await userApi.getProducts()
      dispatch(setProducts(products))
    } catch (error: any) {
      dispatch(setError(error.message))
    }
  }

export default mainSlice.reducer
