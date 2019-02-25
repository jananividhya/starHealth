import React, { Component } from 'react'
import { Menu,Sticky } from 'semantic-ui-react'
import "../css/NavBar2.css"
import 'semantic-ui-css/semantic.min.css'
class NavBar2 extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })
   
  render() {
    return (

      <div class="nav1">
      <div class="nav-header1">
        <div class="nav-title1">
        <div className="image1" >
          <img className="aimage1" src='https://www.starhealth.in/sites/default/files/logo.png' />
        </div>
         </div>
      </div>
      <div className="nav-btn1">
        <label for="nav-check1">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <input type="checkbox" id="nav-check1" />
      <div className="nav-links1">
        <a href="//github.io/jo_geek" target="_blank">ABOUT</a>
        <a href="http://stackoverflow.com/users/4084003/" target="_blank">HEALTH ZONE</a>
        <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">MEDIA CENTER</a>
        <a href="https://codepen.io/jo_Geek/" target="_blank">CONTACT US</a>
        <a href="https://jsfiddle.net/user/jo_Geek/" className="dropdown1 dropbtn1" target="_blank">LOGIN
          <div className="dropdown-content1">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          
        </a>
        <a href="https://jsfiddle.net/user/jo_Geek/" className="btns"target="_blank"> <a className="button1" href="#">BUY NOW</a></a>
      </div>
    </div>
    );
  }
}
export default NavBar2;