import React, { Component } from 'react';
import '../css/Media.css';
import video1 from '../../img/video1.png';
import video2 from '../../img/video2.jpg';
import video3 from '../../img/video3.png';
import video4 from '../../img/video4.jpg';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
//import Popupp from './Popupp.js';


class Media extends Component {
  
  state = { open: false
           
           }
           show = dimmer => () => this.setState({ dimmer, open: true })
           close = () => this.setState({ open: false })
  render() {
    const { open, dimmer } = this.state
    return (
      <div>
        <center><h1 className="center_text_media" >Media</h1></center>
        <div className="fix_media"> 
        <Button onClick={this.show('blurring')}> <img src={video1} className="sample2" /></Button>
  
  <Modal dimmer={dimmer}  open={open} onClose={this.close}>
  <iframe width="400" className="iframepos video1move"  frameborder="0" height="250" src="https://www.youtube.com/embed/KtYw2V1qNbU?autoplay=1">
</iframe>

    
      </Modal>
      <Button onClick={this.show('blurring')}> <img src={video2} className="sample2" /></Button>
  
  <Modal dimmer={dimmer}  open={open} onClose={this.close}>
  <iframe width="400" className="iframepos"  frameborder="0" height="250" src="https://www.youtube.com/embed/DjXOOh37AhU?autoplay=1">
</iframe>

    
      </Modal>
      
      <Button onClick={this.show('blurring')}> <img src={video3} className="sample2" /></Button>
  
  <Modal dimmer={dimmer}  open={open} onClose={this.close}>
  <iframe width="400" className="iframepos"  frameborder="0" height="250" src="https://www.youtube.com/embed/JEt8HjBJIHE?autoplay=1">
</iframe>

    
      </Modal>
      
     
      <Button onClick={this.show('blurring')}> <img src={video4} className="sample2" /></Button>
  
  <Modal dimmer={dimmer}  open={open} onClose={this.close}>
  <iframe width="400" className="iframepos"  frameborder="0" height="250" src="https://www.youtube.com/embed/9L6cn0HBxDU?autoplay=1">
</iframe>

    
      </Modal>
     
        </div>
      
      </div>
      
      
    )
  }

    }
    export default Media;
