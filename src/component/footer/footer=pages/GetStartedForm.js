import React, {Component} from 'react';

class GetStartedForm extends Component {
    render() {
        return (
            <form id="get-started-form" noValidate="novalidate">
                <div className="form-group">
                    <input type="text" className="form-control" name="validation-fullname"
                           placeholder="Full Name"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="validation-email"
                           placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="validation-mobile"
                           placeholder="Mobile"/>
                </div>
                <div className="form-group">
                            <textarea className="form-control message" name="validation-message"
                                      placeholder=" Message"/>
                </div>
                <div className="more-btn">
                    <button type="submit" className="btn btn-primary btn-rounded">Submit</button>
                </div>
            </form>
        );
    }
}

export default GetStartedForm;