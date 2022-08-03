import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppThunk, RootState} from './store'
import {userApi} from "../shopAPI/api";
import {PopUpInfo, ProductType} from "../MainTypes";

export type ShopStateType = {
  products: Array<ProductType>
  error: string
  cart: Array<ProductType>
  popUpInfo: null | PopUpInfo
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
    setProducts: (state, action: PayloadAction<Array<ProductType>>) => {
      state.products = action.payload
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
    setPopUp: (state, action: PayloadAction<PopUpInfo>) => {
      state.popUpInfo = action.payload
    },
    displayingPopUp: (state, action: PayloadAction<boolean>) => {
      state.displayingPopUp = action.payload
    },
    setQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
      const selectedProduct = state.cart.find(i => i.id === action.payload.id)
      if (!selectedProduct) return
      selectedProduct.quantity = action.payload.quantity
    }
  },
})

export const {
  setProducts,
  setError,
  addProductInCart,
  deleteProductFromCart,
  setPopUp,
  setQuantity,
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
      const { products } = await userApi.getProducts()
      dispatch(setProducts(products.map(v => ({...v, quantity: 1, price: +v.price}))))
    } catch (error: any) {
      dispatch(setError(error.message))
    }
  }

export default mainSlice.reducer
