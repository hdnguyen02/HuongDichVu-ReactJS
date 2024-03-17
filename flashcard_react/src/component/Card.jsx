
import React, { useRef, useState } from 'react'

function Card() {
    const flipCardInner = useRef(null);

    const [isFlip, setIsFlip] = useState(false)


    function handleFlip(event) {
        console.log("có")
        setIsFlip(!isFlip)

    }


    function front() {
        return <div className='flex flex-col gap-y-3'>
            <div className="h-40 flex justify-center">
                <img className="object-contain" src="https://i.ytimg.com/vi/tVlcKp3bWH8/maxresdefault.jpg" />
            </div> 
            <p className="text-2xl text-center">Hello</p>
        </div>
    }


    function back() {
        return <div>
            Back
        </div>
    }


    return <div className="flex justify-center">
        <div className="w-[700px]">
            <div className='flex justify-between items-center text-lg w-full' >
                <div>
                    <span className='font-medium italic'>Bộ thẻ: </span>
                    <span>Sexy love</span>
                </div>
                <button onClick={handleFlip} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Lật thẻ
                </button>
            </div>
            <div className="mt-5 bg-[#F0F6F6] p-3 rounded-lg shadow-lg flex flex-col justify-between h-[360px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                        <span className="cursor-pointer"><i className="fa-regular fa-star"></i></span>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <span className="cursor-pointer"><i className="fa-regular fa-heart"></i></span>
                        <span className='cursor-pointer'><i className="fa-solid fa-volume-high"></i></span>
                    </div>

                </div>
                {front()}

                <div className="flex items-center justify-between">
                    <span><i className="fa-regular fa-pen-to-square"></i></span>
                    <span><i className="fa-solid fa-trash"></i></span>
                </div>
            </div>
            <div className='flex gap-x-3 justify-center items-center mt-5'>
                <button className="bg-[#F0F6F6]  h-10 w-10 rounded-full"><i className="fa-solid fa-arrow-left"></i></button>
                <span className='font-medium text-xl pb-1'>2/9</span>
                <button className="bg-[#F0F6F6]  h-10 w-10 rounded-full"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
}

export default Card