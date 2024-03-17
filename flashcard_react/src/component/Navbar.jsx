


function Navbar() { 


  function testNav() {
      return 
             
  }


  function navDefault() {
    return <div className="mb-12 flex justify-between px-12 py-4 bg-[#F0F6F6]">
    <div className="navbar-left flex gap-x-12 items-center">
        <h1 className="text-ctblue text-3xl font-bold">Flashcard</h1>
        <div>
          <ul className="flex gap-x-8 font-medium">
            <li><a href="">Trang chủ</a></li>
            <li><a href=""></a>Bộ thẻ</li>
            <li><a href="">Thẻ</a></li>
          <li className='dropdown flex items-center gap-x-1'>
              <div className='dropdown-btn'>
                <a href="">Lớp</a>
                <img className='w-6 h-6 pt-1' src="/down-arrow.png" alt="icon lớp" />
              </div>
              <div className="dropdown-content-left">
                <a>Đã tạo</a>
                <a>Đã tham gia</a>
              </div>
              
            </li>
          </ul>
        </div>
    </div>
    <div className="navbar-right flex gap-x-12 items-center">
        <div className='flex items-center gap-4'>
           <div className='dropdown'>

              <div className="dropdown-btn">
                <div className="h-10 w-10 rounded-full bg-ctblue flex items-center justify-center">
                    <i className="fa-solid fa-plus text-2xl text-white"></i>
                </div>
              </div>
              
              <div className="dropdown-content-left">
                <button className="w-full text-left flex gap-x-3" data-modal-target="m-create-deck" data-modal-toggle="m-create-deck">
                <i className="fa-regular fa-file text-xl"></i>
                  <span>Bộ thẻ</span>
                </button>
                <button className="w-full text-left flex gap-x-3">
                  <i className="fa-regular fa-clipboard text-xl"></i>
                  <span>Lớp</span>
                  </button>
              </div>
          </div> 

          <div className="rounded-full overflow-hidden h-10 w-10">
            <img className="object-cover w-full h-full" src="https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg" alt="Avatar"/>
        </div>
       </div>
       <div>
          <button className="bg-[#FFCD1F] font-medium rounded-md px-3 py-1">Nâng cấp gói VIP</button>
       </div>
    </div>
  </div>
  }






  return <nav className="bg-[#F0F6F6] mb-12">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="text-ctblue text-2xl font-bold">Flashcard</span>
    </div>
    <div className="gap-x-3 flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      
    <div className="h-8 w-8  rounded-full bg-ctblue flex items-center justify-center">
                    <i className="fa-solid fa-plus text-2xl text-white"></i>
                </div>
        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          <span className="sr-only">Open user menu</span>
          <img className="w-8 h-8 rounded-full" src="https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg"  alt="user photo"/>
        </button>
        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center"> <button className="bg-[#FFCD1F] font-medium rounded-md px-2 py-1">Nâng cấp gói VIP</button></div>
        
        
        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>

    {/* Trang chủ */}
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        <li>
          <a href="#" className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Trang chủ</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Bộ thẻ</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Thẻ</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Lớp</a>
        </li>
      
      </ul>
    </div>
    </div>
  </nav>
     
}

export default Navbar