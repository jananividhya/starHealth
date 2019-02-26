import React, { Component } from "react";
import Slider from "react-slick";

import slide1 from '../../img/slide1.png';
import slide2 from '../../img/slide2.png';
import slide3 from '../../img/slide3.gif';
import '../css/SimpleSlider.css'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div  >
       
        <Slider {...settings}>
          <div className="coloring" width="auto" height="100%">
            <img className="img_a" src={slide1}  />
            <h1 className="position1">Star Health Gain Insurance Policy 
Avail Tax benefit and OPD reimbursement. </h1>
<br></br><br></br>
<div className="position2" > 
<h3  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Health insurance policy that covers both individual and Family. </h3>
</div>
<div className="position2" >
<h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Cover for both in-patient and out-patient treatments.</h3>
</div>
<div className="position2" >

<h3 >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Unutilized Outpatient benefit can be carried forward to next year upon renewal.</h3>
</div>
<div className="position2">
<h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Affordable premium starting from Rs.15000/-*</h3>
 
 <br></br>
 <br></br>
 <br></br>
 
  </div>
 <button className="button3 small-btn" >BUY NOW</button>
 <br></br>
 <br></br>
 
          </div>


          
 <div className="coloring" width="auto" height="100%">
  <img className="img_a" src={slide2}/>
  <div className="position1" >
    <br></br><br></br>
            <center> <h2>Now your health insurance purchasehas become more affordable with</h2></center> 

  </div>
  <div className="position1">
  <br></br>
  <br></br>
    <center><h1>
Easy EMI options
</h1></center>
  
  </div>
 

<div>
<br></br><br></br>
  <center>
  <button className="newbutton small-btn" >BUY NOW</button> 
  </center>

</div>


<div className="position2" >
<br></br>
<br></br>
<br></br>

<center><h2 className="newstyle">EMI TENURE 3 OR 6 OR 9 UPTO 24 months</h2></center>
<br></br>
<br></br>
<br></br>
<br></br>

</div>

</div>
<div className="coloring  imglast " >
<img src={slide3}  width="100%" height="100%" max-width="100%" />
          <div className="lastslide1">
            <p>
            Health Insurance Portability
            </p>
          </div>
          <div className="lastslide2">
            <span>
Porting your Health Insurance</span>
<span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
End to End</span>
<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
Simplified
</span>
<span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Faster Policy

</span>
<span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button className="newbutton small-btn button_size_lastslide" >KNOW MORE</button> 
</span>
          
<br></br>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}