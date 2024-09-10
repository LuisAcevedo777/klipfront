import {useState} from 'react'
import klipclub from '../public/klipclub.jpg'

function Modali() {
const[isOpen, setIsOpen]=useState(true)
  console.log(isOpen)
function open(bol){

setIsOpen(bol)

}
  
    return (
      <>
      <div className={isOpen ? "modal" : "hide"}>
      <div className="modal-dialog" role="document">
        <div className={isOpen ? "modal-content" : "move"}>
          <div className="modal-header">
            <h5 className="modal-title">Event Notification</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>{open(false)}}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          
            <img src={klipclub} alt="" />
            <div className='modalText'>
            <p className='p'>Ya puedes disfrutar del evento <br/> MUSIC VIBES WITH DJ <br /> AUZURA </p>
            <h5 className='h5Modal'>a few seconds ago </h5></div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Enter the Events</button>
             
          </div>
        </div>
      </div>
    </div> </>
    );
}
    
  
  
  
  export default Modali