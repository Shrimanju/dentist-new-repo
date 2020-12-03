import React from 'react';
import '../sumbitform/sumbitform.scss'
function Submitform() {
  return (
    <div>
      <div className='bottomblues'>
     
            <h1 className='schedule-heading'>SCHEDULE A VISIT</h1>
            <div>
              <center>
              <form>
                <div>
                  <div className='bottomblues__inputfield1'>
                    <input

                      className='inputs11'
                      placeholder='Name'
                      
                      type="text"

                    />
                    <input
                      className='inputs11'
                      placeholder='Phone'
                      type="text"
                    />
                  </div>
                </div>
                <div className='bottomblues__inputfield2'>
                  <div> <input
                    className='inputs11'
                    placeholder='Date'
                    type="text"
                  />
                    <input
                      className='inputs11'
                      placeholder='Service Required'
                      type="text"
                    /></div>
                </div>
                <div>
                  <button
                    type='submit'
                    className='submitbutton1'

                  >Submit
                  </button>
                  <button
                    type='submit'
                    className='callusbutton1'
                  >
                    CallUs
                    </button>
                </div>
              </form>
              </center>
            </div>
            
          </div>
        </div>
      
 
  );
}
export default Submitform;
