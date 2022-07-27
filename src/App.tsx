import React, {FC} from 'react'
import './App.module.scss'
import {useAppSelector} from "./store/hooks"
import {selectDisplayingPopUp, selectError} from "./store/mainSlice"
import {Error} from "./components/errorPage/ErrorPage"
import s from './App.module.scss'
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {RoutesPage} from "./components/RoutesPage";
import {PopUp} from "./components/popUp/PopUp";


const App: FC = () => {
  const errorMessage = useAppSelector(selectError)
  const displayPopUp = useAppSelector(selectDisplayingPopUp)

  return (
    <div className={s.app}>
      {displayPopUp && <PopUp/>}
      <Header/>
        {errorMessage.length > 0 ? <Error message={errorMessage}/> :  <RoutesPage />}
      <Footer />
    </div>
  )
}

export default App
