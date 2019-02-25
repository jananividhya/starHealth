import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/Menu.css';
class CarouselPlan extends React.Component {
  constructor() {
    super();
    this.state = {
      heading: 'default heading',
      message: 'default message'
    }
  }
  setDetails = (e,head,msg) => {
    console.log(e,head,msg);
    e.preventDefault();
    this.setState({
      heading: head,
      message: msg
    });
  }
  render() {
    console.log('Menu');
    return (
        <div id="wrapper">
        <div id="left">
        <div id="heading">
        QUICK LINKS
        </div >
        <div id="inner-heading">
        {this.state.heading}
        </div>
        <div id="message">
        {this.state.message}
        </div>
        </div> 
        <div id="right" className="links">
        <a href="#" onClick={(evt) => this.setDetails(evt,"Network Hospitals","With a large network of more than 8800+ hospitals, search for the best hospitals from our hospitals network to avail cashless treatment with our Health Insurance Plans, on top of this get your treatments done at the best hospital in your city.")} >Network Hospitals</a><br/>
        <a href="#" onClick={(evt) => this.setDetails(evt,"Locate Us","With more than 440+ branches across India, find the closest Star Health Insurance branch near you and visit.")}>Locate us</a><br/>
        <a href="#" onClick={(evt) => this.setDetails(evt,"Claims Status","Now you can view your Health claim status online at the comfort of your home.")}>Claims status</a><br/>
        <a href="#" onClick={(evt) => this.setDetails(evt,"Partners Corner","Are you one our esteemed partners? You can now Login to our Partners Corner to manage all your account.")}>partners corner</a><br/>
        
        </div>
        </div>
    );
  }

}
export default CarouselPlan;
