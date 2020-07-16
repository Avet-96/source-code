import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ContactUs extends Component {
    render() {
        return (
            <section className="contact-us bg-light" data-scroll-index="7">
                <div className="container-fluid">
                    <div className="row align-items-stretch">
                        <div className="col-md-6 p-0" data-aos="fade" data-aos-duration="400">
                            <div className="address-container bg9 h-100">
                                <div className="grediant-overlay-reverse opacity-85"></div>
                                <div className="address-content">
                                    <div className="address-info">
                                        <h2>Charents 4, Yerevan Armenia</h2>
                                    </div>

                                    <div className="address-info">
                                        <p><strong>Phone:</strong> : +374 41 96 06 26</p>
                                    </div>
                                    <div className="social-link social-white">
                                        <Link to="https://www.facebook.com/my.source.code.center" className="fb"><i
                                            className="fa fa-facebook"/></Link>
                                        <Link to="https://www.linkedin.com/company/sourcecode-development-company/"
                                              target="_blank" className="ln"><i className="fa fa-linkedin"/></Link>
                                        <Link to="#" className="gplus"><i className="fa fa-google-plus"/></Link>
                                        <Link to="#" className="dribble"><i className="fa fa-dribbble"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0">
                            <div id="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.122405759127!2d44.52449315110129!3d40.184089277577776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd65d8fbf223%3A0xbc90cf32e98bb0a8!2sSource%20Code!5e0!3m2!1sen!2s!4v1592242930780!5m2!1sen!2s"
                                    width="600" height="450" frameBorder="0" style={{border: 0, allowFullScreen: ''}}
                                    aria-hidden="false" tabIndex="0"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactUs;