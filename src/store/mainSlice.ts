import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppThunk, RootState} from './store'
import {userApi} from "../shopAPI/api";
import {ProductsType, ProductType} from "../MainTypes";

export type shopStateType = {
  products: null | Array<ProductType>
  error: string
}

const initialState: shopStateType = {
  products: null,
  error:'',
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
    }
  },
})

export const {setProducts,setError} = mainSlice.actions

export const selectProducts = (state: RootState) => state.main.products
export const selectError = (state: RootState) => state.main.error

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
