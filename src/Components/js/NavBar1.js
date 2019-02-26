import React from 'react';
import '../css/NavBar1.css';
class NavBar1 extends React.Component {
  render() {
    console.log('NavBar1');
    return (
      <div class="nav">
        <div class="nav-header">
          <div class="nav-title">
            TOLL FREE NUMBER- 1800 425 2255/1800
                                    102 4477
            </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <input type="checkbox" id="nav-check" />
        <div class="nav-links">
          <a href="//github.io/jo_geek" target="_blank">ABOUT</a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">HEALTH ZONE</a>
          <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">MEDIA CENTER</a>
          <a href="https://codepen.io/jo_Geek/" target="_blank">CONTACT US</a>
          <a href="https://jsfiddle.net/user/jo_Geek/" className="dropdown dropbtn2" target="_blank">LOGIN
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            
          </a>
          <a href="https://jsfiddle.net/user/jo_Geek/" className="btn" target="_blank"> <a className="button buybtn" href="#">BUY NOW</a></a>
        </div>
      </div>
    );
  }
}

export default NavBar1;