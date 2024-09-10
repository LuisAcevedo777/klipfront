import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState,useEffect} from 'react';


function Loader() {

  const[percent, setPercent]=useState(0)

useEffect(()=>{

if(percent < 100){

  setTimeout(()=>{setPercent(prev=> prev+=2)},50)

}


},[percent])
  
  
   
    return (
      <div className='divLoader'>
       

     
        <div className='barProgress' >

   <ProgressBar now={percent} label={`${percent}%`} variant={percent < 60 ? "warning"  :  percent < 97 ? "primary" : "success" }/>


   </div>
        
  
      </div>
    )
  }
  
  export default Loader
