import React, {FC, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from "../../store/hooks"
import {getAllProducts, selectProducts} from "../../store/mainSlice"
import {ProductType} from "../../MainTypes"
import {Product} from "./productBox/ProductBox"
import s from './mainPage.module.scss'

export const MainPage: FC = () => {

  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className={s.mainPage}>
      <div className={s.title}>
        Каталог товаров
      </div>
      <div className={s.productsField}>
        {products?.map((product: ProductType, i) => <Product product={product} key={i}/>)}
      </div>
    </div>
  );
}
