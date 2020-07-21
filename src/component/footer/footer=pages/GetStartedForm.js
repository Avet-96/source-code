import React, {Component} from 'react';

class GetStartedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foolName: '',
            email: '',
            phone: '',
            message: '',
        }
    }

    render() {
        return (
            <form id="get-started-form" noValidate="novalidate">
                <div className="form-group">
                    <input type="name"
                           className="form-control"
                           name="foolName"
                           placeholder="Full Name"
                           value={this.state.foolName}
                           onChange={e => this.setState({[e.target.name]: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <input type="email"
                           className="form-control"
                           name="email"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={e => this.setState({[e.target.name]: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <input type="phone"
                           className="form-control"
                           name="phone"
                           placeholder="Mobile"
                           value={this.state.phone}
                           onChange={e => this.setState({[e.target.name]: e.target.value})}
                    />
                </div>
                <div className="form-group">
                            <textarea
                                className="form-control message"
                                name="message"
                                placeholder=" Message"
                                value={this.state.message}
                                onChange={e => this.setState({[e.target.name]: e.target.value})}

                            />
                </div>
                <div className="more-btn">
                    <button type="submit" className="btn btn-primary btn-rounded">Submit</button>
                </div>
            </form>
        );
    }
}

export default GetStartedForm;