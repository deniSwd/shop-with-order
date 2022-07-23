import React, {FC} from 'react'
import './App.module.scss'
import {MainPage} from "./components/mainPage/MainPage"
import {useAppSelector} from "./store/hooks"
import {selectError} from "./store/mainSlice"
import {Error} from "./components/errorPage/ErrorPage"


const App: FC = () => {
  const errorMessage = useAppSelector(selectError)

  return (
    <div className="App">
      {errorMessage.length > 0 ? <Error message={errorMessage}/> :  <MainPage />}
    </div>
  );
}

export default App
