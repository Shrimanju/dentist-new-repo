import React from "react";
import "../meta/styles.css";
import "../meta/typography.css";
import "./postEndodontics.scss";
import sliderpic1 from "../../../assets/teeth1.png";
import sliderpic2 from "../../../assets/cosmetic_bonding.png";
import play from "../../../assets/play.png";
import purchase from "../../../assets/purchasing.png";
import SubmitForm from "./submitform/submitform";
import BottomNav from "./bottomnav/bottomnav.js";


function Slider() {
  return (
    <div>
      <div className="backgroundourexpert">
        <div className="backgroundourexpert logobox">
          <div>
            <div className="backgroundourexpert blueleft">
              <img className="expertteeth" src={sliderpic2} alt="expert" />
              <img className="image1" src={sliderpic1} alt="expert" />

              <img className="playbutton" src={play} alt="expert" />
              <div>
                <div className="rightheading">
                  How is <br />
                  it done?
                </div>
                <div className="rightheadingdescription">
                  Dental crowns are fabricated in the dental <br />
                  laboratory using the impression your dentist
                  <br /> has made of your tooth after having <br />
                  prepared it. Because dental crowns encase <br />
                  the visible portion of a tooth, any porcelain <br />
                  crown (all-ceramic or porcelain-fused-to-
                  <br />
                  metal ones) can be used to enhance the
                  <br /> cosmetic appearance of a tooth.
                </div>
              </div>
            </div>
          </div>
          <center>
            <div class="three-dots">
              <span class="first"></span>
              <span class="first"></span>
              <span class="first"></span>
              <span class="first"></span>
              <span class="first"></span>
              <span class="first"></span>
              <span class="first"></span>
              <span class="second"></span>
              <span class="second"></span>
              <button type="submit" className="previous1 round1">
                &#8249;
              </button>
              <button type="submit" className="previous2 round2">
                &#8250;
              </button>
            </div>
          </center>
          <br/>

          <div>
          <div >
              <div id="emi-options" class="row">
                <div class="col-lg-3 no-padding"></div>
                <div class="col-lg-5 no-padding"></div>
                <div class="col-lg-4 no-padding">
                  <img id="hand-pic" src={purchase} alt="purchase" />
                </div>
              </div>
            </div>
            </div>
            

          <div>
            <br></br>
            <br />
            <br />
            <br />
            <div className="ourexperts">
              <div className="ourexperts__meeetourexpertsheading">
                Other Services
              </div>
              <br />
              <br />
              <br />
              <br />


              {/* <div class="card">
                <img
                  src="https://jooinn.com/images/men-4.jpg"
                  alt="Avatar"
                  style={{ width: 100 + "%" }}
                />
                <div class="container">
                  <h2>
                    <b>John Doe</b>
                  </h2>
                  <p>Architect & Engineer</p>
                </div>
              </div> */}


              <div className="ourexperts__leftarrowbutton">
                <button type="submit" className="previous round">
                  &#8249;
                </button>
                <div className="ourexperts__leftcard">
                  <div className="ourexperts__leftcard__leftcardname">
                  Scaling
                  </div>
                  <div className="ourexperts__leftcard__leftcardnamedes">
                    {/* Text Goes Here */}
                  </div>
                </div>
              </div>
              <div className="ourexperts__centralcard">
                <div className="ourexperts__centralcard__centralcardname">
                Gum Infection
                </div>
                <div className="ourexperts__centralcard__centralcardnamedes">
                  {/* Text Goes Here */}
                </div>
                <div className="ourexperts__rightcard">
                  <div className="ourexperts__rightcard__rightcardname">
                  Self-ligating braces
                  </div>
                  <div className="ourexperts__rightcard__rightcardnamedes">
                    {/* Text Goes Here */}
                  </div>
                  <div className="ourexperts__rightarrowbutton">
                    <button type="submit" className="previous11 round11">
                      &#8250;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SubmitForm />
          </div>
          <div>
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
