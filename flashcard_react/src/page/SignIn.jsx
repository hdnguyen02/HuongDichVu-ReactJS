import React, { useState, useRef } from 'react'
import { baseUrl, authSignInUrl } from '../global'
import {  useDispatch } from 'react-redux'
import { setCredential, setIsAuthenticated } from '../store/userSlice'
import Fail from '../component/Fail'
import { useNavigate } from 'react-router-dom'

function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const failRef = useRef()
  const navigate = useNavigate()

  async function postSignIn(email, password) {
    const url = baseUrl + authSignInUrl
    try {
      const jsonRp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      const response = await jsonRp.json()
      if (!jsonRp.ok) {
        throw new Error(response.message)
      } 
      const data = response.data
      localStorage.setItem('accessToken', data.accessToken)
      dispatch(setIsAuthenticated(true))
      dispatch(setCredential(data.user))
      navigate('/')
    }
    catch (error) {
      failRef.current.show(error.message, 2000)
    }
  }
  function handleSignIn(event) {
    event.preventDefault()
    postSignIn(email, password)
  }


  return (
    <form onSubmit={handleSignIn} className='px-24 flex flex-col gap-y-3'>
      <input onChange={event => setEmail(event.target.value)} required type="email" />
      <input onChange={event => setPassword(event.target.value)} required type="password" minLength={6} />
      <button type='submit' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Đăng nhập
      </button>
      <Fail ref={failRef}/>
    </form>)
}
export default SignIn
