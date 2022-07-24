import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {CartPage} from "./cartPage/CartPage";
import {MainPage} from "./mainPage/MainPage";

export const RoutesPage: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/cartPage' element={<CartPage/>}/>
    </Routes>
  )
}
