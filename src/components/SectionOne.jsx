import klipclub from '../public/klipclub.jpg'
import imagenA from '../public/A.jpg'
import imagenB from '../public/b.jpg'
import imagenC from '../public/c.jpg'



function SectionOne() {


    return (
      
      <div className='containerSection'>
         
         <div id="carrusel-contenido">
            <div id="carrusel-caja">
                <div className="carrusel-elemento">
                <div className='carouselItem2'>
        <div className='containerSectionOne'>
            <div className="divContainer">
                <img className='imgSectionLittle' src={klipclub} alt="klipimgs" />
            </div>
            <h2 className='textLittleImg'>text</h2>
            </div>
      <div className='divImg'> <img className='imgcarousel' src={imagenA} alt="klipimgs" /><span className={'live'}>LIVE</span></div>
      </div>
                </div>
                <div className="carrusel-elemento">   
                <div className='carouselItem2'>
        <div className='containerSectionOne'>
            <div className="divContainer">
                <img className='imgSectionLittle' src={imagenB} alt="klipimgs" />
            </div>
            <h2 className='textLittleImg'>text</h2>
            </div>
      <div className='divImg'> <img className='imgcarousel' src={imagenC} alt="klipimgs" /><span className={'live'}>LIVE</span></div>
      </div>
                </div>
                <div className="carrusel-elemento">   
                <div className='carouselItem2'>
        <div className='containerSectionOne'>
            <div className="divContainer">
                <img className='imgSectionLittle' src={klipclub} alt="klipimgs" />
            </div>
            <h2 className='textLittleImg'>text</h2>
            </div>
      <div className='divImg'> <img className='imgcarousel' src={imagenA} alt="klipimgs" /><span className={'live'}>LIVE</span></div>
      </div>                       
                </div>
            </div>
        </div>
        
    
  
 
    </div>
       
    )
}

export default SectionOne



//----------------------------------------------------


    
        
    
      