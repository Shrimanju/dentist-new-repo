import React from 'react';
import '../bottomnav/bottomnav.scss'
import Whatsapp from '../../assets/whatsapp.png'
import Youtube from '../../assets/youtube.png'
import Twitter from '../../assets/twitter.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
function Bottomnav() {
  return (
    <div>
   
   <div className=' bottomblacks1'>
              <div className='bottomblacks1__box'>
                <div>
                  <div className=' ourlocation1' >Our locations</div>
                  <div className=' ourlocationdes1'>Trust Pharmacy, 1st Floor, Beside GOLD HUB MALL, Main Rd<br /> opp. K B N Hospital, Gulbarga, Karnataka 585102</div>
                   <button
                    type='submit'
                    className=' bottombutton11 '
                  >Show on Maps 
               </button>
                  <div className=' ourlocationdes1'>92, New Jewargi Rd, Bhagyavanti Nagar,<br /> Santosh Colony, Gulbarga, Karnataka 585102</div>
                  <button
                    type='submit'
                    className=' bottombutton11'
                  >Show on Maps
              </button> 
                </div>
                <div>
                  <div className='timing' >Timings</div>
                  <div className=' timingdes'>Mon. Wed, Thu: 9am to 5pm <br />Tue: 11am to 7pm<br /> Fri: 9am to 1pm<br /> By Appointment Only</div>
                </div>
                <div>
                  <img
                    className='whatsapp1'
                    src={Whatsapp}
                    alt='expert'
                  />
                </div>
                <div  >
                  <img
                    className='youtube1'
                    src={Youtube}
                    alt='expert'
                  />
                </div>
                <div  >
                  <img
                    className='twitter1'
                    src={Twitter}
                    alt='expert'
                  />
                </div>
                <div  >
                  <img
                    className='facebook1'
                    src={Facebook}
                    alt='expert'
                  />
                </div>
                <div  >
                  <img
                    className='instagram1'
                    src={Instagram}
                    alt='expert'
                  />
                </div>
              </div>
            </div>
        </div>
  );
}
export default Bottomnav;
