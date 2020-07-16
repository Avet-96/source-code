import React, {Component} from 'react';
import {connect} from "react-redux";
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";
import LoginForm from "./registration-login-forms/LoginForm";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="row mx-0">

                <div className="col-md-5 px-0">
                    <div className="auth-banner-section">
                        <img src={logo} alt="letstart"/>
                    </div>
                </div>

                <div className="col-md-7 px-0 stretch-card">
                    <div className="auth-screen-2">

                        <div className="nav-get-started">
                            <p>Don't have an account?</p>
                            <Link className="more-link" to="registration">GET STARTED</Link>
                        </div>

                        <div className="auth-content">
                            <div className="welcome-text">
                                <h3>Hello! let's get started</h3>
                                <p className="mb-0">Enter your details below.</p>
                            </div>
                            <LoginForm/>
                            <div className="auth-footer">
                                <p className="text-muted">Copyright © 2018 Admin. All rights reserved.</p>
                                <ul className="mt-15">
                                    <li><Link to="#" className="more-link">Terms &amp; Conditions</Link></li>
                                    <li><Link to="#" className="more-link">Cookie Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

const mapStateToProps = (store) => ({})
const mapDispatchToProps = {}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default Container;