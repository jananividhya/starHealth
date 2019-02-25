import React from 'react';
import NavBar1 from "./NavBar1.js";
import NavBar2 from "./NavBar2.js";
import Apps from "./App_js.js"
import Marquee from "./Marquee";
import "../css/App.css";
import Menu from './Menu';
import People from "./People";
import Static from "./Static";
import Media from "./Media";
class App extends React.Component {
  render() {
    return (
      <div>
    
        {/* <NavBar1 />
      <div className="divSticky"><NavBar2 /></div>
        
        
        <Apps />
       
        <Marquee />
        <People />
        <Menu />
     <Static />  */}
     <Media />
      
      </div>);
  }

}
export default App;
