import React from 'react'
import Navbar from '../component/Navbar'
import CreateCard from '../component/CreateCard'
import MCreateDeck from '../component/MCreateDeck'
import PrepareStudy from '../component/PrepareStudy'
import Card from '../component/Card'

function Home() {
  
  return (
    <div>
      <Navbar/>
      <div className='mx-24'>
        <Card/>
        <MCreateDeck/>
      </div>
      
    </div>
    
  )
}

export default Home
