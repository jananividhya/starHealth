import React, { Component } from 'react';
import '../css/star_css.css';
//import {Link} from "react-router-dom";
import { Button} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="box noMargin">
      <div class="slide-text slide_style_center">
                    <h1 data-animation="animated fadeInDown" class="policyhead ">When it comes to health there should be no compromise.</h1>
                    <ul class="policylist list-group" id="indicator1">
                        <li class="list-group-item"><a data-toggle="tab" href="#myselfcontent" data-bg-img="banner1" target="#planformyself" class="planformyselfid btn btn-default policy" data-animation="animated fadeInUp">Plan for Myself</a></li>
                        <li class="list-group-item"><a data-toggle="tab" href="#myfamilycontent" data-bg-img="familybanner" target="#planformyfamily" class="planformyfamilyid btn btn-default policy" data-animation="animated fadeInDown">Plan for My Family</a></li>
                        <li class="list-group-item"><a data-toggle="tab" href="#myparentscontent" data-bg-img="parentbanner" target="#planformyparents" class="planformyparentsid btn btn-default policy" data-animation="animated fadeInUp">Plan for My Parents</a></li>
                        <li class="list-group-item"><a data-toggle="tab" href="#travelcontent" data-bg-img="travelbanner" target="#travelinsurance" class="travelinsuranceid btn btn-default policy" data-animation="animated fadeInDown">Travel Insurance</a></li>
                        <li class="list-group-item"><a data-toggle="tab" href="#accidentcarecontent" data-bg-img="accidentbanner" target="#accidentcare" class="accidentcareid btn btn-default policy" data-animation="animated fadeInUp">Accident Care</a></li>
                    </ul>
                </div>
        </div>  
    );
  }
}

export default App;
