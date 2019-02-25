import React, { Component } from 'react';
import '../css/Media.css';
import video1 from '../../img/video1.png';
import video2 from '../../img/video2.jpg';
import video3 from '../../img/video3.png';
import video4 from '../../img/video4.jpg';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
//import Popupp from './Popupp.js';


class Media extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
     s.src = "./mediainner";
    s.innerHTML = "document.write('This is output by document.write()!')";
    console.log("this",this);
    this.instance.appendChild(s);
  }

  render() {
    return (
<div>
       <h2>Image Modal</h2>
      <p>In this example, we use CSS to create a modal (dialog box) that is hidden by default.</p>
      <p>We use JavaScript to trigger the modal and to display the current image inside the modal when it is clicked on. Also note that we use the value from the image's "alt" attribute as an image caption text inside the modal.</p>
      
      <img id="myImg" src={video1} alt="Snow" ref={el => (this.instance = el)} />
      

      <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01" />
        <div id="caption"></div>
   </div>
      </div> 
      );
  }

    }
    export default Media;
