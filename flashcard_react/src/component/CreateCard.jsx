

function CreateCard() { 
    return <div>
        <div className="info-deck flex justify-between items-center">
            <div className="flex flex-col gap-y-6">   
                <div>
                    <span className="italic font-medium">Tên bộ thẻ: </span>
                    <span>Sexy love</span>
                </div>
    
                <div>
                    <span className="italic font-medium">Mô tả: </span>
                    <span>Tình yêu gợi cảm</span>
                </div>
            </div>


            <div>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Tạo
                </button>
            </div>
        </div>

        <div className="site-create bg-[#F6F7FB] rounded-lg p-6 mt-16">
            <div  className="flex items-center justify-between gap-x-8">
                <div className="w-full border-r pr-6 border-gray-400">
                    <div>
                        1
                    </div>
                    <div className="flex justify-between gap-x-16">
                        <div className="flex flex-col w-full gap-y-3">
                            <input className="border-0 border-b bg-transparent border-gray-400 focus:outline-none" type="text" />
                            <label htmlFor="">Thuật ngữ</label>
                        </div>
                        
                        <div className="flex flex-col w-full gap-y-3">
                            <input className="border-0 border-b bg-transparent border-gray-400 focus:outline-none" type="text" />
                            <label htmlFor="">Định nghĩa</label>
                        </div>
                    </div>
                    <div>
                    <div className="flex flex-col gap-y-3">
                            <input className="border-0 border-b bg-transparent border-gray-400 focus:outline-none" type="text" />
                            <label htmlFor="">Thông tin thêm, ví dụ</label>
                        </div>
                    </div>
                </div>
                <div class="site-file flex flex-col gap-y-3">
                    <span>Hình ảnh</span>
                    <input type="file" />
                    <span>Âm thanh</span>
                    <input type="file" />
                </div>
            </div>
        </div>

        <div className="mt-12 flex justify-center">
            <div className="h-10 w-10 rounded-full bg-[#3B82F6] flex items-center justify-center">
                        <i className="fa-solid fa-plus text-2xl text-white"></i>
            </div>
        </div>
       

    </div>
  }
  
  export default CreateCard