import Carousel from 'react-bootstrap/Carousel';
import { Badge } from 'react-bootstrap';
import { useState} from 'react';
import { useForm } from 'react-hook-form';
import PostList from './PostList'
import axios from 'axios'

import klipclub from '../public/klipclub.jpg'



function SectionThree() {
  //llamado de use selector

   

  const { register, handleSubmit, reset} = useForm();
   const[seeArea, setSeeArea] = useState(false)
   const[resp, setResp] = useState(null)
 
  


  //enviando booleano para cambiar el form de aspecto
  function seeForm(date){
    setSeeArea(date)
   }

   async function onSubmit(data){
    try{ 
       
       let dates = data.archivos[0]
       const formData = new FormData()

      
      formData.append('archivos', dates)
      formData.append('mensaje', data.mensaje)
    
    const response = await axios.post('https://klipserver.up.railway.app/api/v1/files/post/', formData)
    reset()
    setResp(response.statusText)
   console.log(response)
   
}catch(error){console.log(error)}
     reset()
   }

   


  return (
    <div className='containerSectionThree' >
      <div className='principalDivThree'>
            <div className='imgForm'>
            <div className='imgForm2'>
      
           <div className={seeArea ? 'accordion' : 'littleAccordion'} id="accordionExample" onMouseLeave={() => { seeForm(false) }} >
  <div className="accordion-item" >   {/*className=seeArea ? 'seeFormDivP' : 'littleAccordionItem'*/}
    <h2 className="accordion-header">
    <div  className={seeArea ? 'collapseOnes' : 'accordion-buttons'}> <img className={seeArea ? 'hide' : 'imgKlipForm'} src={klipclub} alt="image" />
    <div  className="divText" onMouseOver={()=>seeForm(true)}>
       {seeArea ? '' : 'What are you thinking?'}
      </div></div>
    </h2>
    <div  className={seeArea ? 'accordion-collapse' : 'hide'} data-bs-parent="#accordionExample" >
      <div className="accordion-body">
       <img className='imgKlipForm' src={klipclub} alt="image" />

      <form action="" className='form' /*onSubmit={handleSubmit(subChange)*/ encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)}>
        <input type='text-Area' id='mensaje' name='mensaje'  className={seeArea ? 'seeFormTextArea' : 'textArea'} placeholder={seeArea ? 'Dale Doble Click aquí para ocultar!' : 'What are you thinking?'}  {...register('mensaje')} />
        <div className={seeArea ? 'seeFormDiv' : 'hide'}>
            <div className='inputFiles'>
              <input id='archivos' type="file"name='archivos' hidden multiple  {...register('archivos')} />
              <label className='btnAgregar' htmlFor="archivos">Agregar</label>
              <label htmlFor="archivos"><i className="fa-regular fa-image"></i></label>
              <label htmlFor="archivos"><i className="fa-regular fa-circle-play"></i></label>
              <label htmlFor="archivos"><i className="fa-solid fa-microphone-lines"></i></label>
              <label htmlFor="archivos"><i className="fa-regular fa-tags"></i></label>
            </div><div><select name="transporte" className="select">

              <option>Público</option>

              <option>Privado</option>

            </select><button className='btnSubmit' type='submit'>Post</button></div></div>
        </form> 


      </div>
    </div>
  </div>
 
  
</div>
<div className='barLetter'><div className='sing'>Singers</div><div className='sing'>Trends</div></div>

<PostList responseSection={resp}/>
           </div>









                 <div className='containerCarouselSectionThree'>

        <Carousel className='carouselSectionThree' interval={2500} controls={false} indicators={true}>
          <Carousel.Item className='carouselItem' >

 
            <ol className='listGroup'>
              <div className="top">Top5</div>

              <div className='rankingTitle'>Trending</div>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol">Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>

            </ol>

          </Carousel.Item>
          <Carousel.Item className='carouselItem'>
            <ol className='listGroup'>
              <div className="top">Top5</div>

              <div className='rankingTitle'>Trending</div>
              <li className="d-flex">
              
              <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>
                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>

            </ol>
          </Carousel.Item>
          <Carousel.Item className='carouselItem'>
            <ol className='listGroup'>
              <div className="top">Top5</div>

              <div className='rankingTitle'>Trending</div>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
              <li className="d-flex">
                <div className="fw-bold"><img className='imgList' src={klipclub} alt="" /><h4 className="carol" >Karol G</h4></div>

                <Badge className="primary" pill>
                  <i className="fa-solid fa-star"></i><h4 className="number">20K</h4>
                </Badge></li>
                
            </ol>
          </Carousel.Item>
        </Carousel></div>
      </div>
      </div>
    </div>
  )
}

export default SectionThree















