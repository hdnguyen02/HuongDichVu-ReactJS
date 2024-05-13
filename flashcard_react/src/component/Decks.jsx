
import {  useRef, useState, useEffect } from 'react'
import { baseUrl, version } from '../global'
import { Link } from 'react-router-dom'
import DeleteDeck from './DeleteDeck'
import Success from './Success'
import Fail from './Fail'

function Decks() {

    const [decks, setDecks] = useState()
    const refSuccess = useRef()
    const refFail = useRef()
    let [idDeckDelete, setIdDeckDelete]= useState(null)

    async function handleDeleteDeck() {
        
        const accessToken = localStorage.getItem('accessToken')
        const url = `${baseUrl + version}/decks/${idDeckDelete}`
        try {
            const jsonRp = await fetch(url, {
              method: 'DELETE',
              headers: {
                'Authorization': `Bearer ${accessToken}`
              },
            })
            const response = await jsonRp.json()
            if (!jsonRp.ok) {
              throw new Error(response.message)
            } 
            const data = response.data
            const message = response.message
            refSuccess.current.show(2000, message)
            fetchDecks()
            handleCancel() // đóng thẻ lại
          }
          catch (error) {
            failRef.current.show(error.message, 2000)
          }
          setIdDeckDelete(null)
    
    }

    function handleCancel() {
        document.getElementById('popup-delete-deck').style.display = 'none'
        setIdDeckDelete(null)
    }

    function showPopupDeleteDeck(id) { 
        document.getElementById('popup-delete-deck').style.display = 'flex'
        setIdDeckDelete(id)

        
    }

    

    async function fetchDecks() {
        const accessToken = localStorage.getItem('accessToken')
        const url = baseUrl + version + '/decks'
        try {
            const jsonRp = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
            })
            const response = await jsonRp.json()
            if (!jsonRp.ok) {
                throw new Error(response.message)
            }
            setDecks(response.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchDecks()
    })

    return <div>
        <div className='profile flex gap-x-3 items-center justify-between font-medium'>
            <div className='flex gap-x-3 items-center'>
                <div className='rounded-full overflow-hidden h-9 w-9'>
                    <img className='object-cover w-full h-full' src='../../public/avatar.avif' alt='Avatar' />
                </div>
                <h1>Thầy Thuận badboi</h1>
            </div>
            <div>
                <Link to={'/decks/create'} className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded'>
                    Thêm bộ thẻ
                </Link>
            </div>
        </div>
        <hr className='my-12'></hr>
        {decks &&
            <div className='decks'>
                {decks.map(deck => (
                    <div key={deck.id} className='cursor-pointer deck flex justify-between bg-[#EDEFFF] rounded-md py-4 px-8 mb-4'>
                        <div className='deck-left flex gap-x-6'>
                            <span className='flex items-center font-medium min-w-40'>{deck.name}</span>
                            <span className='flex items-center min-w-12'>{deck.numberCards} thẻ</span>
                            <span className='flex items-center'>{deck.createAt}</span>
                        </div>
                        <div className='deck-right flex gap-x-2 items-center'>
                            <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
                                Chia sẽ
                            </button>
                            <button onClick={() => showPopupDeleteDeck(deck.id)} className='bg-ctred hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-red-600 rounded'>
                                Xóa
                            </button>
                            <Link to={`/decks/edit/${deck.id}`} className='bg-ctgray hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded'>Chỉnh sữa</Link>
                        </div>
                    </div>
                ))}
            </div>
        }
        <DeleteDeck idDeckDelete={idDeckDelete} handleCancle={handleCancel} handleDeleteDeck={handleDeleteDeck}/>
        <Success ref={refSuccess}/>
        <Fail ref={refFail}/>
    </div>
}

export default Decks