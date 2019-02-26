import React, { Component } from 'react';
import '../css/Media.css';
import video1 from '../../img/video1.png';
import video2 from '../../img/video2.jpg';
import video3 from '../../img/video3.png';
import video4 from '../../img/video4.jpg';
var ele = ["https://www.youtube.com/embed/KtYw2V1qNbU?autoplay=1",
  "https://www.youtube.com/embed/DjXOOh37AhU?autoplay=1",
  "https://www.youtube.com/embed/JEt8HjBJIHE?autoplay=1",
  "https://www.youtube.com/embed/9L6cn0HBxDU?autoplay=1"]
class Media extends Component {
  constructor(props) {
    super(props);
  }

  loadScript = src => {
    const script = document.createElement("script");

    script.src = src;
    script.async = true;

    document.body.appendChild(script);
  }
  componentDidMount() {
    this.loadScript("./mediainner.js");
  }
 spanOnClick = (event) => {
  var modal = document.getElementsByClassName('modal');
  // console.log(modal[0].style);
  modal[0].style.display = "none";
    modal[1].style.display = "none";
    modal[2].style.display = "none";
    modal[3].style.display = "none";
  }
  
  imgOnClick = (event) => {
    console.log(event.target.alt);
    var modal = document.getElementsByClassName('modal');
    var modalImg = document.getElementsByClassName("modal-content");
    var captionText = document.getElementsByClassName("caption");
    switch(event.target.alt){
      case "star":
      modal[0].style.display = "block";
      console.log("elements", ele[0]);
      modalImg[0].src = ele[0];
      console.log("model", modalImg[0].src);
      captionText[0].innerHTML = "Star Health Vedio 1";
      break;
      case "health":
      modal[1].style.display = "block";
      console.log("elements", ele[1]);
      modalImg[1].src = ele[1];
      console.log("model", modalImg[1].src);
      captionText[1].innerHTML = "Star Health Vedio 2";
      break;
      case "starhealth":
      modal[2].style.display = "block";
      console.log("elements", ele[2]);
      modalImg[2].src = ele[2];
      console.log("model", modalImg[2].src);
      captionText[2].innerHTML ="Star Health Vedio 3";
      break;
      case "stars":
      modal[3].style.display = "block";
      console.log("elements", ele[3]);
      modalImg[3].src = ele[3];
      console.log("model", modalImg[3].src);
      captionText[3].innerHTML = "Star Health Vedio 4";
      break;
    }
  }

  render() {
    return (<div className="mediaa">
      <div className="title">
      <h2>Media</h2>
      </div>
      <div className="mainmodal">
      <img onClick={this.imgOnClick} class="myImg" src={video1} alt="star" id="myImg" />
      <img onClick={this.imgOnClick} class="myImg" src={video2} alt="health" id="myImg" />
      <img onClick={this.imgOnClick} class="myImg" src={video3} alt="starhealth" id="myImg"/>
      <img onClick={this.imgOnClick} class="myImg" src={video4} alt='stars' id="myImg"/>
      </div>
      <div id="myModal" class="modal" >
        <span class="close" onClick={this.spanOnClick}>&times;</span>
        <iframe class="modal-content" id="img01"></iframe>
        {/* <img class="modal-content" id="img01" /> */}
        <div class="caption" id="caption"></div>
      </div>
      <div id="myModal" class="modal" >
        <span class="close" onClick={this.spanOnClick}>&times;</span>
        <iframe class="modal-content" id="img01"/>
        {/* <img class="modal-content" id="img01" /> */}
        <div class="caption" id="caption"></div>
      </div>
      <div id="myModal" class="modal" >
        <span class="close" onClick={this.spanOnClick}>&times;</span>
        <iframe class="modal-content" id="img01"/>
        {/* <img class="modal-content" id="img01" /> */}
        <div class="caption" id="caption" ></div>
      </div>
      <div id="myModal" class="modal" >
        <span class="close" onClick={this.spanOnClick}>&times;</span>
        <iframe class="modal-content" id="img01"/>
        {/* <img class="modal-content" id="img01" /> */}
        <div class="caption" id="caption" ></div>
      </div>

    </div>
    );
  }

}
export default Media;
