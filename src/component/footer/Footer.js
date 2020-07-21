import React, {Component} from 'react';
import JoinUsContainer from "./footer=pages/JoinUsContainer";
import FooterText from "./footer=pages/FooterText";

class Footer extends Component {
    render() {
        return (
            <footer id='#footer'
                className="footer theme-1" data-scroll-index="7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <JoinUsContainer/>
                        </div>
                    </div>
                    <FooterText/>
                </div>
            </footer>
        );
    }
}

export default Footer;