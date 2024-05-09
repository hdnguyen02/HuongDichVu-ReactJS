

function Decks() { 
  return <div>
        <div className="profile flex gap-x-3 items-center font-medium">
            <div className="rounded-full overflow-hidden h-12 w-12">
                <img className="object-cover w-full h-full" src="https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg" alt="Avatar"/>
            </div>
            <h1>Thầy Thuận badboi</h1>
        </div>
        <hr className="my-12"></hr>
        <div className="decks">
            <div className="deck flex justify-between bg-[#EDEFFF] rounded-md py-4 px-8">
                <div className="deck-left flex gap-x-6">
                    <span className="flex items-center font-medium">Sinh học</span>
                    <span className="flex items-center">20 thẻ</span>
                    <span className="flex items-center">20/11/2023</span>
                </div>
                <div className="deck-right flex gap-x-2 items-center">
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Chia sẽ
                    </button>
                    <button className="bg-ctred hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-red-600 rounded">
                        Xóa
                    </button>
                    <button className="bg-ctgray hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">Chỉnh sữa</button>
                </div>
            </div>
        </div>
  </div>
}

export default Decks