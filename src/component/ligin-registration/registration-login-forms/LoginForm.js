import React, {Component} from 'react';
import {connect} from "react-redux";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    handelCreateData = (e) => {
        e.preventDefault()
    }
    handelChange = (e) => this.setState({[e.target.name]: e.target.value})

    render() {
        return (
            <form
                action="#"
                onSubmit={(e) => this.handelCreateData(e)}
            >
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-user"/></span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            name='userName'
                            value={this.state.userName}
                            onChange={(e) => this.handelChange(e)}
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
                            name='password'
                            value={this.state.password}
                            onChange={(e) => this.handelChange(e)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Sign In</button>
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
)(LoginForm)

export default Container;