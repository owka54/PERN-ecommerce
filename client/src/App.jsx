import './reset.css'
import './App.css'

import Root from './components/root'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Account from './components/account'
import { useEffect, useState } from 'react'
import Login from './components/login'
import Register from './components/register'

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const isAuthenticated = () => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }

  const setAuth = (boolean) => {
    boolean === true ? setIsAuth(true) : setIsAuth(false);
  }

  useEffect(() => {
    isAuthenticated();
  })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Root isAuth={isAuth}/>} />
          <Route exact path='/my-account' element={isAuth === true ? <Account isAuth={isAuth}/> : <Login setAuth={setAuth}/>} />
          <Route exact path='login' element={isAuth ? <Account /> : <Login setAuth={setAuth}/>} />
          <Route exact path='register' element={isAuth ? <Account /> : <Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
