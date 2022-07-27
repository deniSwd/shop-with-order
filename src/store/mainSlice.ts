import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppThunk, RootState} from './store'
import {userApi} from "../shopAPI/api";
import {PopUPType, ProductsType, ProductType} from "../MainTypes";

export type ShopStateType = {
  products: Array<ProductType>
  error: string
  cart: Array<ProductType>
  popUpInfo: null | PopUPType
  displayingPopUp: boolean
}

const initialState: ShopStateType = {
  products: [],
  error: '',
  cart: [],
  popUpInfo: null,
  displayingPopUp: false
}

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
    },
    setPopUp: (state, action: PayloadAction<PopUPType>) => {
      state.popUpInfo = action.payload
    },
    displayingPopUp: (state, action: PayloadAction<boolean>) => {
      state.displayingPopUp = action.payload
    }
  },
})

export const {
  setProducts,
  setError,
  addProductInCart,
  deleteProductFromCart,
  setPopUp,
  displayingPopUp
} = mainSlice.actions

export const selectProducts = (state: RootState) => state.main.products
export const selectError = (state: RootState) => state.main.error
export const selectCart = (state: RootState) => state.main.cart
export const selectPopUp = (state: RootState) => state.main.popUpInfo
export const selectDisplayingPopUp = (state: RootState) => state.main.displayingPopUp


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
