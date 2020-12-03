import React from "react";
import "../meta/styles.css"
import "../meta/typography.css"
import "./slider.css"

function navbutton(){
    return(<div>
        <div id="next-prev" class="">
            <a href="#logo" class="previous round text-center">‹</a>
            <a href="#logo" class="next round text-center">›</a>
    </div> 
    </div>)
}

export default navbutton