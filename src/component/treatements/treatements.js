
import React from 'react';
import Nopath from '../../assets/NoPath.png'
import '../treatements/treatements.scss'
import Treatmentsubmitform from '../treatmentsubmitform/treatmentsubmitform'
import Bottomnav from '../bottomnav/bottomnav'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Tooth from '../../assets/Tooth.I13.2k.png'
import Expert from '../../assets/CER-Press-image-CEREC-Ortho-SW-2.0-1.png'
import '../treatmentsubmitform/treatmentsubmitform.scss'
function Treatements() {
  return (
    <div>
      <div className='backgroundtreatment'>
        <div className='backgroundtreatments'>


          <div className='backgroundtreatments__logobox'>
            <div className='menu'>
              <nav >
                <ul >
                  <li >
                    <a href="#">EXPERIENCE DENTISTRY</a>

                  </li>
                  <li >
                    <a href="#">OUR EXPERTS</a>
                  </li>
                  <li>
                    <a href="#">BUZZ</a>
                  </li>
                  <li>
                    <a href="#">ABOUT</a>
                  </li>
                  <li>
                    <a href="#">SCHEDULE A VISIT</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='backgroundtreatments__logobox__logoimage'>
              <div className='backgroundtreatments__logobox__Swetha'>Swetha</div>
              <div className='backgroundtreatments__logobox__dentistry'>DENTISTRY</div>
            </div>
          </div>
          <div className='backgroundtreatments__text__wherescience'>WHERE SCIENCE </div>
          <div className='backgroundtreatments__text__meetsart'>MEETS ART </div>

          <span >
            <img
              className='backgroundtreatments__cloudleft'
              src={Nopath}
              align="left"
              alt='cloud'
            />

          </span>
          <div>
            <img
              className='backgroundtreatments__teeth '
              src={Tooth}
              align="left"
              alt='cloud'
            />
          </div>
          <div>
            <img
              className='backgroundtreatments__cloudright '
              src={Nopath}
              align="right"
              alt='cloudright'
            />

          </div>

        </div>
        <div className='backgroundtreatment__blue'>
          <div className='backgroundtreatment__blue__bluerighttreatement'>
            <img
              className='imageblueright'
              src={Expert}
              alt='expert'
            />


          </div>
          <div className='backgroundtreatment__blue__blueleftdes'>The first in Karnataka to <br />implement <br />One-Visit Dentistry</div>
          <div className='backgroundtreatment__blue__blueleftdessmall'>We are one of the first in the nation to adopt one-day dentistry<br />through CEREC (Chairside Economical Restoration of Esthetic<br /> Ceramics, the ultimate in digital dentistry technology.</div>
        </div>

        <div className='backgroundtreatment__treatements'>

          <div className='backgroundtreatment__treatements__treatmentheading'>Orthodontics</div>
          <div className='backgroundtreatment__treatements__blueleftdessmall'>From traditional braces to invisible aligners, get the best<br /> alignment for your smile. </div>
          <button className='tratmentbutton'>Explore</button>

          <div className='bluecentertreatement'> </div>
          <div className='styledtreatment'>treatments</div>

        </div>

        <div className='backgroundtreatment__meetdoctor'>
          <div className='treatmentblueleft'>
            <img
              className='treatmentimage'
              src={Expert}
              alt='expert'
            />
            <div className='treatmentheading'>Meet<br /> Dr. Prashant Patil
            <div className='treatmentdes'>Read about the story of the one-of a kind, world-class<br /> dentistry in Karnataka and the man behind it.
            </div>
              <button className='tratmentbutton1'>Explore</button>

            </div>
          </div>
        </div>
        <div className='backgroundtreatment__dentaltourism'>

          <div className='backgroundtreatment__dentaltourism__left'>
            <div className='dentaltourismheading'>Dental Tourism.</div>
            <div className='paidverification'>A paid vacation + your dental procedure</div>
            <div className='dentaltourismdes'>Combine your paid vacation with your dental procedure<br /> schedule to save money or to get more value out of<br /> investment.</div>
            <button className='tratmentbutton'>Explore </button>
          </div>
          <div className='backgroundtreatment__dentaltourism__right'> <img
            className='dentaltourismteeth'
            src={Tooth}

          /></div>

        </div>
        <div className='backgroundtreatment__bottomblue'>
        <div className='backgroundtreatment__bottomblue bluecolor'>
      
 <div className='numbers'>21 311+ 10 4 0</div>
 <div className='numbersdes1'>Year of Experience
 <div className='numbersdes2'>Happy patients
 <div className='numbersdes3'>Advanced Dental Operatories
 <div className='numbersdes4'>Winning Awards
 <div className='numbersdes5'>Medical Specialist
 </div>
 </div>
 </div>
 </div>
        </div>
        </div>
        </div>






<div><Treatmentsubmitform/></div>
{/* <div className='backgroundtreatment__bottommnav'><Bottomnav/></div>         */}
      </div>
    </div>

  );
}

export default Treatements