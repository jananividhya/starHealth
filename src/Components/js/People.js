import React, { Component } from 'react';
import Peoples from '../../img/people1.png';
import '../css/People.css';

class People extends Component {
    render() {
      return (
        
      <div className="box_people">
      <img className="fix_people" src={Peoples}  alt="Flying Kites" />
      <div className="text_people">

          <h1 className="center_text_people">When it comes to health there should be no compromise</h1>
         <div className="block1"><div className="inner1"><p>Hassle-free and customer-friendly direct claim settlement without intervention of TPA</p>
   </div>  
   </div>


   <div className="block2"><div className="inner2"><p>Largest Network hospital base of over 8800+ hospitals</p>
   </div>  
   </div>

   <div className="block3"><div className="inner3"><p>5,46,788 claims settled in the financial year 2017-2018.</p>
   </div>  
   </div>
 
   <div className="block4"><div className="inner4"><p>Rs. 1970.26 Crs of claims settled in the financial year 2017-2018.</p>
   </div>  
   </div>

   <div className="block5"><div className="inner5"><p>93% of cashless claims settled in less than 2 hours.</p>
   </div>  
   </div>


  </div>
  
      </div>
              
         
      );
    }
  }
  
  export default People;
  