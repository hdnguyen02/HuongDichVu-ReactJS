import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Navbar() {

  const credential = useSelector(state => state.user.credential)
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  return <nav className="bg-[#F0F6F6] mb-12 h-20 px-24 flex justify-between items-center">
    <div className=''>
      <span className='text-blue-700 text-3xl font-bold'>
        Flashcard
      </span>
    
    </div>
    <div>
      <ul className='flex gap-x-3'>
        <Link to={"/"} className='hover:cursor-pointer'>Trang chủ</Link>
        <Link to={"/decks"} className='hover:cursor-pointer'>Bộ thẻ</Link>
        <Link to={"/classes"} className='hover:cursor-pointer'>Lớp</Link>
      </ul>
    </div>
    {/* ẩn hiện tùy theo authenticate*/}
    {!isAuthenticated && (
      <div className='flex gap-x-3'>
        <Link to="sign-in" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Đăng nhập
        </Link>
        <Link to="sign-up" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Đăng ký
        </Link>
      </div>
    )}
    {isAuthenticated && (
      <div className='flex gap-x-3'>
        profile người dùng
      </div>
    )}

  </nav>
}

export default Navbar