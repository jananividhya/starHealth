import React, { Component } from 'react';
import '../css/Marquee.css';
class Marquee extends Component {
    render() {
        console.log('Marquee');
      return (
          <div className="outer">
              <marquee align="middle" direction="right" behavior="alternate" width="80%" height="30" className="scroll" scrolldelay="125">***News article appeared in Times of India about investment &nbsp;<a className="mar_a" href="https://www.starhealth.in/sites/all/themes/starhealth/newui/img/Times-of-India_Investors-have-infused-Rs-350cr-deal-to-close-by-March.jpg" target="_blank">>>&nbsp;KNOW MORE</a></marquee>
     
          </div>
           );
    }}
    export default Marquee;