import React from 'react';
import '../worldclassexperience/worldclassexperience.scss'
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import secondImg from '../../assets/2.png';

function Worldclassexperiences() {
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 20,
  }
  return (
    <div className="animation">
      <h3 className='animation-heading'>WORLD CLASS EXPERIENCE</h3>
      <div className='swiper-container' style={{padding:'30px 0px 0px 70px'}}>
        <Swiper {...params}>
          <SwiperSlide className='swiperslide-click-drag'><span className='swiperslide-text'>Click & Drag</span></SwiperSlide>
          <SwiperSlide><img src={secondImg} alt='firstimage' className='swiperimg' ></img></SwiperSlide>
          <SwiperSlide><img src={secondImg} alt='secondimage' className='swiperimg'></img></SwiperSlide>
          <SwiperSlide><img src={secondImg} alt='thirdimage' className='swiperimg'></img></SwiperSlide>
          <SwiperSlide><img src={secondImg} alt='fourthimage' className='swiperimg'></img></SwiperSlide>
        </Swiper>
      </div>

      <div className='schedule-container'>
        <h1 className='schedule-heading'>SCHEDULE A VISIT</h1>

        <div className='schedule-form row'>
          <div className='schedule-form-left col-md-6'>
            <form>
              <div className="form-group">
                <label className='form-label'>Name</label><br />
                <input type='text' className='form-input'></input><br />
              </div>
              <div className="form-group">
                <label className='form-label'>Date</label><br />
                <input type='text' className='form-input'></input><br />
              </div>
              <button type='submit' className='btn btn-light badge-pill form-btn'>Submit</button>
            </form>
          </div>

          <div className='schedule-form-right col-md-6'>
            <form>
              <div className="form-group">
                <label className='form-label'>Phone</label><br />
                <input type='text' className='form-input'></input><br />
              </div>
              <div className="form-group">
                <label className='form-label'>Service Provided</label><br />
                <input type='text' className='form-input'></input><br />
              </div>
              <button type='submit' className='btn btn-light badge-pill form-btn'>Call Us</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Worldclassexperiences;
