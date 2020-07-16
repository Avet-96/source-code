import React, {Component} from 'react';
import {Link} from "react-router-dom";
import HomeBannerText from "./HomeBannerText";
import video from './video.mov'

class HomeBanner extends Component {
    render() {
        return (

            <div className="particle-container fullscreen bg20" data-scroll-index="0">

                <video src={video} autoPlay muted loop/>
                <div id="particles" className="particles">
                    <canvas className="particles-js-canvas-el" width="1686" height="330"
                            style={{width: '100%', height: '100%'}}/>
                </div>
                <div className="grediant-overlay opacity-85"></div>

                <div className="center-col text-center white-text" id="home">
                    <div className="container-fluid">
                        <HomeBannerText/>
                    </div>
                </div>

                <div className="scroll-down">
                    <Link to="#about-us" data-scroll-goto="1">
                        <span></span>
                    </Link>
                </div>

            </div>

        );
    }
}

export default HomeBanner;