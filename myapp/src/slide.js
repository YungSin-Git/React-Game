import React,{Component} from "react";
import { Carousel } from 'react-bootstrap';
class slide extends Component{
    render(){
        return(
                    <div className="content-slide">
                        <Carousel>
                                <Carousel.Item>
                                        <img className="d-block w-100" src="/img/pubg.jpg"  />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src="/img/rule.png"  />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src="/img/dota2.png"  />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src="/img/callofduty.jpg"  />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src="/img/fortnite.jpg" />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src="/img/gta.jpg" />
                                </Carousel.Item>
                        </Carousel>
                    </div>
        );
    }
}
export default slide;