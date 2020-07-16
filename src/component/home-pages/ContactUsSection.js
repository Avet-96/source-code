import React, {Component} from 'react';

class ContactUsSection extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="contact-us-form theme-1 section-spacer" data-scroll-index="7">
                <div className="container">
                    <div className="section-header">
                        <h2><small className="text-primary">Contact us</small>Get in touch</h2>
                    </div>
                    <form id="validati111on-form" className="h-100" noValidate="novalidate" data-aos="fade"
                          data-aos-duration="400" method="post">
                        <div id="message" className="alert alert-success d-none"></div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="validation-firstname"
                                           placeholder="Firstname"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="validation-lastname"
                                           placeholder="Lastname"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="validation-email"
                                           placeholder="Email"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="validation-phone"
                                           placeholder="Phone"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                <textarea className="form-control message" name="validation-message"
                                          placeholder=" Message"/>
                                </div>
                            </div>
                            <div className="w-100 text-center">
                                <button type="submit" className="btn btn-primary btn-rounded">Contact Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default ContactUsSection;