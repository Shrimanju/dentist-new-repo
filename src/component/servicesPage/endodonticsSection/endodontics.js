import React from "react"
import "../meta/styles.css"
import "../meta/typography.css"
import rc from "../../../assets/root_canal.png"
import chat from "../../../assets/chat.png"

function endodontics(){
    return (
    <div id="section-1">
        <div className="row">
        <div id="othediv1" className="col-lg-8"></div>
        <div  id="greenbox" className="col-lg-4">
        {/* <div  id="greenbox"></div> */}
    </div>
    </div>
    <br/><br/><br/><br/>

   <div className="container-fluid">
       <div id="j" className="jumbotron">
            <div className="container-fluid">
                <div className="row">
                    <div id="text-div-1" className="col-xl-5">
                        <p id="end-title">Endodontics</p>
                        <p id="roots-and-crowns" className="end-bold"> Root Canals and Crowns</p>
                        <p id="end-subtitle">Saving the teeth</p>
                        <p className="text-body">Inflamed or infected pulp (pulpitis) often causes a toothache. To relieve the pain and prevent further complications, the tooth may be extracted or it may be saved by a root canal treatment. Once root canal treatment is performed, the patient must usually have a crown placed over the tooth to protect it and enhance its aesthetics.</p>
                        <p id="end-subtitle">Root Canals</p>
                        <p className="text-body"> Root canal treatment, also known as endodontic treatment, is a dental procedure in which the diseased or damaged pulp (core) of a tooth is removed and root canals are filled and sealed.</p>
                        <p id="end-subtitle">Crowns</p>
                        <p className="text-body">Dental crowns are fabricated in the dental laboratory using the impression your dentist has made of your tooth after having prepared it. Because dental crowns encase the visible portion of a tooth, any porcelain crown (all-ceramic or porcelain-fused-to-metal ones) can be used to enhance the cosmetic appearance of a tooth.</p>
                    </div>
                    <div id="image-div-1" className="col-xl-7">
                        <img id="root-canal-pic" src={rc} alt="rootcanalpicture"/>
                        <div id="chat-container">
        <div id="chat-horizontal-bar" >
            <div class="chat-text">
                Online Consultation
            </div>
         </div>
        <div class="chat-circle d-flex align-items-center justify-content-center">
            <img id="chat-img" src={chat}/>
        </div>
    </div>
                    </div>

                </div>
            </div>
            </div>
            </div>
    </div>
    )
}

export default endodontics;