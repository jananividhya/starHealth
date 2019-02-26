import React, { Component } from "react";
import { Segment, Image } from 'semantic-ui-react'
import people from '../../img/people.png';
import '../css/People.css';

export default class People extends React.Component{
    render(){
        return(
            <div className="back_b" >
            <br></br>
            <br></br>
            <br></br>
     <p className="text_pos">Why Star Health Insurance is a smart choice</p>           
     <Image src={people} size='huge' floated='right'  />
<div className="text_pos1">Hassle-free and customer-friendly direct claim settlement without intervention of TPA
<p className="text_pos2">Largest Network hospital base of over 8800+ hospitals</p>
<p className="text_pos3">5,46,788 claims settled in the financial year 2017-2018Rs.
</p>
</div>

<div className="text_pos4">Rs. 1970.26 Crs of claims settled in the financial year 2017-2018
<p className="text_pos5">93% of cashless claims settled in less than 2 hours</p>
</div>
 </div>
        );

    }
}
    
  
  