import React, {Component} from 'react';
import {connect} from "react-redux";

class RegistrationForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            r_password: '',
        }
    }


    handelChange = (e) => this.setState({[e.target.name]: e.target.value})

    render() {
        return (
            <form action="#">
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-user"/></span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            onChange={e => this.handelChange(e)}
                            value={this.state.userName}
                            name='userName'
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-lock"/></span>
                        </div>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={e => this.handelChange(e)}
                            value={this.state.password}
                            name='password'
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-lock"/></span>
                        </div>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            onChange={e => this.handelChange(e)}
                            value={this.state.r_password}
                            name='r_password'
                        />
                    </div>
                </div>
                <div className="form-group mt-30">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (store) => ({})
const mapDispatchToProps = {}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationForms)

export default Container;