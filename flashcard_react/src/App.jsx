import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import Home from './page/Home'
import Deck from './page/Deck'
import Decks from './component/Decks'
import PrepareStudy from './component/PrepareStudy'
import SignIn from './page/SignIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsAuthenticated, setCredential } from './store/userSlice'
import { baseUrl, userInfoUrl } from './global'

function App() {
  const dispatch = useDispatch()


  async function checkAuthenticate(token) {
    const url = baseUrl + userInfoUrl
    const jsonRp = await fetch(url, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })
    const response = await jsonRp.json()
    if (!jsonRp.ok) {
      throw new Error(response.message)
    }
    dispatch(setIsAuthenticated(true))
    dispatch(setCredential(response.data.user))
  }


  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      checkAuthenticate(token)
    }
  })


  return (
    <Router>
      <div>
        <Navbar /> {/* Thành phần nav top */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/decks" element={<Deck />} >
            <Route path='' element={<Decks />} />
            <Route path='prepare' element={<PrepareStudy />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  )

}

export default App