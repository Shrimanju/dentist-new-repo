import React from 'react';
import './bottomnav.scss'
import w from './whatsapp.png'
import Youtube from './youtube.png'
import Twitter from './twitter.png'
import Instagram from './instagram.png'
import Facebook from './facebook.png'
function BottomNav() {
  return (
    <div>
   
   <div className=' bottomblacks'>
              <div className='bottomblacks__box'>
                <div>
                  <div className=' ourlocation' >Our locations</div>
                  <div className=' ourlocationdes'>Trust Pharmacy, 1st Floor, Beside GOLD HUB MALL, Main Rd<br /> opp. K B N Hospital, Gulbarga, Karnataka 585102</div>
                  <button
                    type='submit'
                    className=' bottombutton1'
                  >Show on Maps
              </button>
                  <div className=' ourlocationdes'>92, New Jewargi Rd, Bhagyavanti Nagar,<br /> Santosh Colony, Gulbarga, Karnataka 585102</div>
                  <button
                    type='submit'
                    className=' bottombutton1'
                  >Show on Maps
              </button>
                </div>
                <div>
                  <div className=' ourlocation' >Timings</div>
                  <div className=' ourlocationdes'>Mon. Wed, Thu: 9am to 5pm <br />Tue: 11am to 7pm<br /> Fri: 9am to 1pm<br /> By Appointment Only</div>
                </div>
                <div>
                  <img
                    className='whatsapp'
                    src={w}
                    alt='expert'
                  />
                </div>
                <div  >
                  <img
                    className='youtube'
                    src={Youtube}
                    alt='expert'
                  />
                </div>
                <div  >
                  <img
                    className='twitter'
                    src={Twitter}
                    alt='expert'
                  />
                </div>
                <div  >
                  <img
                    className='facebook'
                    src={Facebook}
                    alt='expert'
                  />
                </div>
                <div  >
                  <img
                    className='instagram'
                    src={Instagram}
                    alt='expert'
                  />
                </div>
              </div>
              <br/><br/>
            </div>
        </div>

  );
}

export default BottomNav;
