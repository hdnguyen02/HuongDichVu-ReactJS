


function PrepareStudy() { 
    return <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-6">
            <div>
                <span className="font-medium italic">Tên bộ thẻ: </span>
                <span>Sexy love</span>
            </div>
            <div>
                <span className="font-medium italic">Mô tả</span>
                <span>Tình yêu gợi cảm</span>
            </div>
            <div className="flex items-center">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
                <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900">Thẻ yêu thích</label>
            </div>
            <div className="flex items-center">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
                <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900">Thẻ chưa thuộc</label>
            </div>
            <div>
                <p className="text-red-500 font-medium">Lưu ý: họp tất cả nếu không chọn mục nào</p>
            </div>
            
        </div>
        <div className="flex flex-col gap-y-3">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Thêm thẻ
                    </button>s
                    <button className="bg-ctgray hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">Học thẻ</button>
        </div>
  
      
    </div>
  }
  
  export default PrepareStudy