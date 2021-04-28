import React,{Component} from "react";
import Slide from './slide';
class Home extends Component{
    render(){
        return(
            <div className="content">
                <div>
                <Slide />
                </div>
                    <div className="content-aside">
                        <div className="content-side1">
                            <div> 
                            <a href="https://lite.pubg.com/download/"><img src="/img/pubg.jpg" />
                                 <h3>DownloadNow</h3></a>
                            </div>
                            <div>
                            <a href="https://rules-of-survival.en.softonic.com/?ex=BB-1459.1#:~:text=Rules%20of%20Survival%20is%20a%20popular%20survival-based%20strategy,upon%20your%20wits%2C%20some%20luck%2C%20and%20innate%20skills."><img src="/img/rule.png" />
                                    <h3>DownloadNow</h3></a>
                            </div>
                        </div>
                        <div className="content-side2">
                            <div> 
                            <a href="https://dota-2.en.softonic.com/?ex=BB-1459.1"><img src="/img/dota2.png" />
                                    <h3>DownloadNow</h3></a>
                            </div>
                            <div>
                            <a href="https://call-of-duty.en.softonic.com/?ex=BB-1459.1"><img src="/img/callofduty.jpg" />
                                    <h3>DownloadNow</h3></a>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default Home;