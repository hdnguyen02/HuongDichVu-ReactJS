import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import Home from './page/Home'
import Deck from './page/Deck'
import Decks from './component/Decks'
import PrepareStudy from './component/PrepareStudy'
import SignIn from './page/SignIn'
import CreateDeck from './component/CreateDeck'
import EditDeck from './component/EditDeck'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { baseUrl, userInfoUrl } from './global'


function App() {

  async function checkAuthenticate(token) {

    const url = baseUrl + userInfoUrl
    const jsonRp = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
    const response = await jsonRp.json()
    if (!jsonRp.ok) {
      localStorage.setItem('isAuthenticated', false) 
      localStorage.removeItem('accessToken')
      return 
    }
    localStorage.setItem('isAuthenticated', true) 
    localStorage.setItem('email', response.data.email) 
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
            <Route path='create' element={<CreateDeck />} />
            <Route path='edit/:id' element={<EditDeck />} />
            <Route path='prepare' element={<PrepareStudy />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  )

}

export default App