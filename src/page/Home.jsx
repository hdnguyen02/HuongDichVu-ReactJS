
import useAuth from '../context/AuthContext'


function Home() {

  const {test} = useAuth()

  return (
    <div className="mt-[60px] w-full">
       <img className="w-full h-full" src="/study.jpg" alt=""/>
       {test}
    </div>
  )
}

export default Home
