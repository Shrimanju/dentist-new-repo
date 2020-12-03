import React from 'react';
import '../treatmentsubmitform/treatmentsubmitform.scss'
import Bottomnav from '../bottomnav/bottomnav'
function Treatmentsubmitform() {
  return (
    <div>
        <div className='treatmentsubmitform'>
<div className='treatmentsubmitform__bottomblue'>
              <div>
              <div className='treatmentsubmitform__bottomblue__worldclass'>World Class</div>
              <div className='treatmentsubmitform__bottomblue__experience'>Experience</div>
                <div className='treatmentsubmitform__bottomblue__schedule'>Schedule a visit</div>
                <div>
                  <form>
                    <div className='your-class '>
                      <div className='treatmentsubmitform__bottomblue__inputfield1'>
                        <input
                          className='inputs'
                          placeholder='Name'
                          type="text"

                        />
                        <input
                          className='inputs1'
                          placeholder='Phone'
                          type="text"
                        />
                      </div>
                    </div>
                    <div className='treatmentsubmitform__bottomblue__inputfield2'>
                      <div> <input
                        className='inputs'
                        placeholder='Date'
                        type="text"
                      />
                        <input
                          className='inputs1'
                          placeholder='Service Required'
                          type="text"
                        />
                        </div>
                        <input
                          className='inputs3'
                          placeholder='date'
                          type="text"
                        />
                    </div>
                  </form>
                </div>
                <div className='treatmentsubmitform__bottomblue__buttonvalue'>
                  <button
                    type='submit'
                    className=' buttons1'
                  >
                    Submit
              </button>
                </div>
                <div className='treatmentsubmitform__bottomblue__buttonvalue1'>
                  <button
                    type='submit'
                    className=' buttons1'
                  >
                    Call us
              </button>
                </div>
              </div>
            </div>
            <div>
                
            </div>
           <div><Bottomnav/></div> 
    </div>
    </div>
  );
}

export default Treatmentsubmitform;






