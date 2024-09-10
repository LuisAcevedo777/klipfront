
import {useState, useEffect} from 'react';
import axios from 'axios'
import ReactPlayer from 'react-player';




function PostList(responseSection) {

  const[allFiles, setAllFiles]=useState([])

 
  
  useEffect(()=>{
   
        
       
       const fetchFiles = async()=>{
        try {
         const response =  await axios.get('https://klipserver.up.railway.app/api/v1/files/')
       
       console.log(response.data)
       setAllFiles(response.data)

      } catch (error) {
        console.error('fetchin error', error)
      }}
     
  fetchFiles()
    
    },[responseSection])

   

    return (
      <div className='principalContainerPost'>
       
  
        {       
          allFiles?.map(item => {
            if (
              item.archivos?.includes('.mp4') || 
              item.archivos?.includes('.ts') || 
              item.archivos?.includes('.avi') || 
              item.archivos?.includes('.gif') || 
              item.archivos?.includes('.mpeg') || 
              item.archivos?.includes('.webm') 
            ) {
              return (       
                <div className='DivContainerPost' key={item.id}>

<div className='topG'>
          <div className='totGroup'>
            <div className='topGroup'>
              <div className='DivImgG1'><i className="fa-regular fa-user"></i></div>
            </div>
            <div className='topGroup'>
              <h5 className='textG'>Shakira</h5>
              <div className='imgG'><i className="fa-solid fa-music"></i></div>
              <div className='imgG'><i className="fa-solid fa-music"></i></div>
            </div>
            <div className='topGroup'>
              <h6 className='textG'>5 min</h6>
              <div className='imgG'><i className="fa-solid fa-lock"></i></div>
            </div>
          </div>
          <span className='option'>...</span>
        </div>

                  <figure className="figure">
                       
                  <div className='video'>
                  <div className='mensaje'><p>{item.mensaje}</p></div>
                    <ReactPlayer url={`https://klipserver.up.railway.app/${item.archivos}`} playing={false} controls={true} />
                   </div>

                    <div className='bottomV'>
                      <div className='bottomGroup'>
                        <div className='imgG2'><i className="fa-regular fa-hand-spock"></i></div>
                        <h6 className='textG'>10k Likes</h6>
                      </div>
                      <div className='bottomGroup'>
                        <div className='imgG2'><i className="fa-regular fa-comment"></i></div>
                        <h6 className='textG'>42 Comments</h6>
                      </div>
                      <div className='bottomGroup'>
                        <div className='imgG2'><i className="fa-solid fa-share"></i></div>
                        <h6 className='textG'>58 Shares</h6>
                      </div>
                    </div>

                
                  </figure>
                </div>
              );  
            } 
  else if (
  item.archivos?.includes('.au') || 
  item.archivos?.includes('.mid') || 
  item.archivos?.includes('.wav') || 
  item.archivos?.includes('.ra') || 
  item.archivos?.includes('.mp3')
) {
  return (       
    <div className='DivContainerPost' key={item.id}>

<div className='topG'>
<div className='totGroup'>
<div className='topGroup'>
  <div className='DivImgG1'><i className="fa-regular fa-user"></i></div>
</div>
<div className='topGroup'>
  <h5 className='textG'>Shakira</h5>
  <div className='imgG'><i className="fa-solid fa-music"></i></div>
  <div className='imgG'><i className="fa-solid fa-music"></i></div>
</div>
<div className='topGroup'>
  <h6 className='textG'>5 min</h6>
  <div className='imgG'><i className="fa-solid fa-lock"></i></div>
</div>
</div>
<span className='option'>...</span>
</div>

      <figure className="figure">
           <div className='audio'>	
      <div className='mensaje'><p>{item.mensaje}</p></div>
        <ReactPlayer  width="100%"  height="100%" url={`https://klipserver.up.railway.app/${item.archivos}`} playing={false} controls={true} />
        </div>
        <div className='bottom'>
          <div className='bottomGroup'>
            <div className='imgG2'><i className="fa-regular fa-hand-spock"></i></div>
            <h6 className='textG'>10k Likes</h6>
          </div>
          <div className='bottomGroup'>
            <div className='imgG2'><i className="fa-regular fa-comment"></i></div>
            <h6 className='textG'>42 Comments</h6>
          </div>
          <div className='bottomGroup'>
            <div className='imgG2'><i className="fa-solid fa-share"></i></div>
            <h6 className='textG'>58 Shares</h6>
          </div>
        </div>

    
      </figure>
    </div>
  );  
} 


            
           
            else if (
              item.archivos?.includes('.jpeg') || 
              item.archivos?.includes('.png') || 
              item.archivos?.includes('.jpg') || 
              item.archivos?.includes('.jfif') || 
              item.archivos?.includes('.tiff')
            ) { 
              return (
                <div className='DivContainerPost' key={item.id}>

<div className='topG'>
          <div className='totGroup'>
            <div className='topGroup'>
              <div className='DivImgG1'><i className="fa-regular fa-user"></i></div>
            </div>
            <div className='topGroup'>
              <h5 className='textG'>Shakira</h5>
              <div className='imgG'><i className="fa-solid fa-music"></i></div>
              <div className='imgG'><i className="fa-solid fa-music"></i></div>
            </div>
            <div className='topGroup'>
              <h6 className='textG'>5 min</h6>
              <div className='imgG'><i className="fa-solid fa-lock"></i></div>
            </div>
          </div>
          <span className='option'>...</span>
        </div>

                  <figure className="figure">
                   
                  <div className='mensaje'><p>{item.mensaje}</p></div>
                    <img src={`https://klipserver.up.railway.app/${item.archivos}`} className="imagenPost" alt="..." />
                    


                    <div className='bottomI'>
                      <div className='bottomGroup'>
                        <div className='imgG2'><i className="fa-regular fa-hand-spock"></i></div>
                        <h6 className='textG'>10k Likes</h6>
                      </div>
                      <div className='bottomGroup'>
                        <div className='imgG2'><i className="fa-regular fa-comment"></i></div>
                        <h6 className='textG'>42 Comments</h6>
                      </div>
                      <div className='bottomGroup'>
                        <div className='imgG2'><i className="fa-solid fa-share"></i></div>
                        <h6 className='textG'>58 Shares</h6>
                      </div>
                    </div>

              

                  </figure>
                </div>
              );
            } else {
              return ( 
                <div className='DivContainerPost' key={item.id}>

<div className='topG'>
          <div className='totGroup'>
            <div className='topGroup'>
              <div className='DivImgG1'><i className="fa-regular fa-user"></i></div>
            </div>
            <div className='topGroup'>
              <h5 className='textG'>Shakira</h5>
              <div className='imgG'><i className="fa-solid fa-music"></i></div>
              <div className='imgG'><i className="fa-solid fa-music"></i></div>
            </div>
            <div className='topGroup'>
              <h6 className='textG'>5 min</h6>
              <div className='imgG'><i className="fa-solid fa-lock"></i></div>
            </div>
          </div>
          <span className='option'>...</span>
        </div>

                  <figure className="figureM">
                  <div className='audio'>
                    <div className='mensaje'><p className='mensajeP'>{item.mensaje}</p></div>
                      </div>

                    <div className='bottom'>
                      <div className='bottomGroup'>
                        <div className='imgG2'><i className="fa-regular fa-hand-spock"></i></div>
                        <h6 className='textG'>10k Likes</h6>
                      </div>
                      <div className='bottomGroup'>
                        <div className='imgG2'><i className="fa-regular fa-comment"></i></div>
                        <h6 className='textG'>42 Comments</h6>
                      </div>
                      <div className='bottomGroup'>
                        <div className='imgG2'><i className="fa-solid fa-share"></i></div>
                        <h6 className='textG'>58 Shares</h6>
                      </div>
                    </div>
                  </figure>
                </div>
              );
            }
          })
        }
      </div>
    );
  
  
  
}export default PostList



