import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
function App() {  
  
  return (
   <div>
    <Header/>
    <Courses/>
    <Toaster />
   </div>    
  )
}

export default App


