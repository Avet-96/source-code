import React, {Component} from 'react';

class JoinUsContainer extends Component {
    render() {
        return (

            <div className="join-us-container bg-reverse-gred">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <div className="join-us-content">
                            <h5>
                                <span>Join us today</span>
                                Sign up for Weekly update
                            </h5>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="join-us-form">
                            <form className="form">
                                <input type="email" className="form-control"
                                       placeholder="Enter your email"/>
                                <button type="submit"><i className="icon-arrow-right-circle"/></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JoinUsContainer;