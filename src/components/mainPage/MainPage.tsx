import React, {FC, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getAllProducts, selectProducts} from "../../store/mainSlice";
import {ProductType} from "../../MainTypes";
import {Product} from "../productBox/ProductBox";

export const  MainPage:FC = () => {

  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)
   useEffect(()=>{
     dispatch(getAllProducts())
   },[])

  return (
    <div>
     Shop content
      {products?.map((product: ProductType,i) => <Product />)}
    </div>
  );
}
