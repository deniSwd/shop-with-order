import React, {FC} from 'react'
import './App.module.scss'
import {MainPage} from "./components/mainPage/MainPage"
import {useAppSelector} from "./store/hooks"
import {selectError} from "./store/mainSlice"
import {Error} from "./components/errorPage/ErrorPage"
import s from './App.module.scss'
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {RoutesPage} from "./components/RoutesPage";


const App: FC = () => {
  const errorMessage = useAppSelector(selectError)

  return (
    <div className={s.app}>
      <Header/>
      <div>
        {errorMessage.length > 0 ? <Error message={errorMessage}/> :  <RoutesPage />}
      </div>
      <Footer />
    </div>
  );
}

export default App
