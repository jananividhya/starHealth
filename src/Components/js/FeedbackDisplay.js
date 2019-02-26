import React from 'react';
import Carousel from 'react-bootstrap-carousel';
import '../css/FeedbackDisplay.css';

class FeedbackDisplay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="glyphicon glyphicon-glass" />;
    rightIcon = rightIcon ? undefined : <span className="glyphicon glyphicon-music" />;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="noUpperMargin">
        <Row>
          <Col span={12}>
            <Carousel
              animation={true}
              wrap={true}
              indicators={false}
              controls={false}
              pauseOnHover={false}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
            >
            <div className="background">
              <div className="carousel-caption ">
              
                <p className="feedbackStyle"><i class="homesprite lefticon"></i>I have had this policy for the past 8-10 years. However, in the initial 2-3 years, I underwent a bypass surgery. The expenditure was about Rs. 2.5-3 lakhs. I received help from Star during my surgery and recovery. And my faith in the company has increased a lot. Today, all my family members have this policy."
                <i class="homesprite righticon"></i>
                </p>
                <p className="nameStyle">Kamal</p>
                <p className="placeStyle">Pune</p>
              </div>
            </div>
              <div className="background">
                <div className="carousel-caption ">
                  <p className="feedbackStyle"> <i class="homesprite lefticon"></i>I have claimed the premium twice, in the first instance I had to pay only Rs. 700 for a hospital bill of around Rs. 18,000 and the second time I had to pay Rs. 900 for a bill of Rs. 32,000. I was pleasantly surprised to find that they have a special package even for cardiac patients.<i class="homesprite righticon"></i></p>
                  <p className="nameStyle">Shami</p>
                  <p className="placeStyle">Bengaluru</p>
                </div>
              </div>
              <div className="background">
                <div className="carousel-caption ">
                  <p className="feedbackStyle"><i class="homesprite lefticon"></i>I have claimed my premium once, when my daughter fell ill and her hospital bill came up to Rs. 25,000 and I received it in less than 2 hours.<i class="homesprite righticon"></i></p>
                  <p className="nameStyle">Gurvinder Singh</p>
                  <p className="placeStyle">Bengaluru</p>
                </div>
              </div>
              <div className="background">
                <div className="carousel-caption ">
                  <p className="feedbackStyle"><i class="homesprite lefticon"></i>I bought a policy from Star Health & Allied Insurance in February 2018 covering my mother, brother and sister. Within 2 months, my brother had to undergo Appendicitis operation. This was my first experience with Star Health and I have to tell you the response was very quick. I've received the settlement of Rs 38428/- today. I am delighted by their service. Looking forward to long relationship with Star Health & Allied Insurance.<i class="homesprite righticon"></i></p>
                  <p className="nameStyle">Seemmy Dansana</p>
                  <p className="placeStyle">Sambalpur</p>
                </div>
              </div>
            </Carousel>
          </Col>
        </Row>
      </div>
    );
  }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-xs-${props.span}`} style={props.style}>
    {props.children}
  </div>
);

export default FeedbackDisplay;
