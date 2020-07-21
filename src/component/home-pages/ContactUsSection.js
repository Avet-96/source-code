import React, {Component} from 'react';

class ContactUsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        }
    }

    handelSubmit = e => {
        e.preventDefault()
    }

    render() {
        return (
            <section className="contact-us-form theme-1 section-spacer" data-scroll-index="7">
                <div className="container">
                    <div className="section-header">
                        <h2><small className="text-primary">Contact us</small>Get in touch</h2>
                    </div>
                    <form
                        id="validati111on-form"
                        className="h-100"
                        noValidate="novalidate"
                        data-aos="fade"
                        data-aos-duration="400"
                        method="post"
                        onSubmit={e => this.handelSubmit(e)}
                    >
                        <div id="message" className="alert alert-success d-none"></div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        placeholder="Firstname"
                                        value={this.state.firstName}
                                        onChange={e => this.setState({[e.target.name]: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        placeholder="Lastname"
                                        value={this.state.lastName}
                                        onChange={e => this.setState({[e.target.name]: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={e => this.setState({[e.target.name]: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        placeholder="Phone"
                                        value={this.state.phone}
                                        onChange={e => this.setState({[e.target.name]: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                <textarea
                                    className="form-control message"
                                    name="message"
                                    placeholder=" Message"
                                    value={this.state.message}
                                    onChange={e => this.setState({[e.target.name]: e.target.value})}
                                />
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