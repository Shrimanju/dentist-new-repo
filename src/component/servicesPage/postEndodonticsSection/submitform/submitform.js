import React from 'react';
import './submitform.scss'
function Submitform() {
  return (
    <div>
      <div className='bottomblues'>
        <div className='bottomblues__bottomblue'>
          <div>
            <div className='bottomblues__bottomblue__schedule'>Schedule a visit</div>
            <div>
            <br/><br/><br/>
              <form>
                <div >
                  <div className='bottomblues__bottomblue__inputfield1'>
                    <input

                      className='input'
                      placeholder='Name'
                      type="text"

                    />
                    <input
                      className='input1'
                      placeholder='Phone'
                      type="text"
                    />
                  </div>
                </div>
                <br/>
                <div className='bottomblues__bottomblue__inputfield2'>
                  <div> <input
                    className='input'
                    placeholder='Date'
                    type="text"
                  />
                    <input
                      className='input1'
                      placeholder='Service Required'
                      type="text"
                    /></div>
                </div>
                <div>
                  <button
                    type='submit'
                    className='submitbutton '

                  >Submit
                  </button>
                  <button
                    type='submit'
                    className='callusbutton'
                  >
                    CallUs
                    </button>
                </div>
              </form>
            </div>
            {/* <div className='bottomblues__bottomblue__buttonvalue'>
                  <button
                    type='submit'
                    className=' button'
                  >
                    Submit
              </button>
                </div>
                <div className='bottomblues__bottomblue__buttonvalue1'>
                  <button
                    type='submit'
                    className=' button'
                  >
                    Call us
              </button>
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submitform;






