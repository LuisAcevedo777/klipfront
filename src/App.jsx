
import React from 'react'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import Footer from './components/Footer'
import  NavbarC  from './components/NavbarC'
import {useEffect, useState} from 'react'
import Modal from './components/Modali.jsx'
import Loader from './components/Loader.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  useEffect(()=>{


    setTimeout(()=>{setIsLoading(false)},5000)
    
    },[])

const[isLoading, setIsLoading]=useState(true)


 if(isLoading){

  return(  <div className='principalContainer'><Loader/></div>)}

  else{
    return( 
    
    <div className='principalContainer'>
  
     <NavbarC/>
     <SectionOne/>
     <SectionTwo/>
     <SectionThree/>
     <div className='bar'></div>
     <Footer/>
     <Modal/>

    </div>)
  
}

}export default App



