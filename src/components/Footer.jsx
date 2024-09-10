import klipclub from '../public/klipclub.jpg'
function Footer() {
 

    return (
      <div className="footerContainer"> 
       <footer className="footer">
    
        
            <div className="logo">
                <div><img className='klipImg' src={klipclub}  alt="imgKlip" /></div>
                <div className='divTitle'><h2 className='titleKlip'>KlipClub</h2></div>
            </div>

                   <div className="divList">
                
                <ul className="list">
                    <li className="li"><a className='aLists' href="#!">Legal</a></li>
                    <li className="li"><a className='aLists' href="#!">PrivacyCenter</a></li>
                    <li className="li"><a className='aLists' href="#!"> Policy</a></li>
                    <li className="li"><a className='aLists' href="#!">Cookies</a></li>
                    <li className="li"><a className='aLists' href="#!">About Ads</a></li>
                    <li className="li"><a className='aLists' href="#!">©2022 Klipclub</a></li>
                </ul>
            </div>

            <div className="socialIcons">
                
                <ul className="listSocial">
                    <li className="li" ><a className='aSocial' href="#!"><i className="fa-brands fa-facebook"></i></a></li>
                    <li className="li" ><a className='aSocial' href="#!"><i className="fa-brands fa-instagram"></i></a></li>
                    <li className="li" ><a  className='aSocial'href="#!"><i className="fa-brands fa-x-twitter"></i></a></li>
                   
                </ul>
            
                <div className="footerCopyright">© 2020 Copyright:</div>            
    </div>

   

</footer>
  
      
</div>)
  }
  
  export default Footer