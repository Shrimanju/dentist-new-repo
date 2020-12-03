import React from 'react';
import Meta from "./meta/meta.js";
import Endodontics from "./endodonticsSection/endodontics"
// import Slider from "./components/section-2-slider/slider"
import Slider from "./postEndodonticsSection/postEndodontics"
// import BottomNav from "./components/section-2-slider/bottomnav/bottomnav.js"
// import SubmitForm from "./components/section-2-slider/submitform/submitform"

function Services() {
  return (
    <div className="App">
      <Meta/>
      <Endodontics/>
      <Slider/>
      </div>
  );
}

export default Services;
