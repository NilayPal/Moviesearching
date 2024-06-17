import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home'
import Error from './Error'
import SingleMovie from './SingelMovie'
import { AppProvider } from "./Context";
// import "./App.css"
function App() {
  

  return (
    <>
    <AppProvider>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<SingleMovie/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
   </BrowserRouter>
   </AppProvider>
    </>
  )
}

export default App
