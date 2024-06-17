import React, {useContext} from 'react'
// import { AppContext } from './Context'
import { useGlobalContext } from './Context';
import Movie from './Movie';
import Search from './Search'
import "./App.css"

const Home = () => {
  // const name = useContext(AppContext);
  
  return (
    <>
    <div className='container'>
    <Search/>
    <Movie/>
    </div>
    </>

  )
}

export default Home
