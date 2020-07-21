import React, {Component} from 'react';
import {connect} from "react-redux";
import DataScrollMenu from './menu-pages/DataScrollMenu'
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handelClick = (e) => {
        this.setState({isOpen: !this.state.isOpen})
        console.log(e.target)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container">

                    <div className="navbar-header">

                        <Link className="navbar-brand" to="#">
                            <img src={logo} alt="Letstart"/>
                        </Link>

                        <button className={!this.state.isOpen
                            ? "navbar-toggler collapsed"
                            : "navbar-toggler"}
                                type="button"
                                data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded={this.state.isOpen}
                                aria-label="Toggle navigation"
                                onClick={e => this.handelClick(e)}
                        >
                            <span/>
                            <span/>
                            <span/>
                        </button>
                    </div>

                    <DataScrollMenu
                        openModal={this.state.isOpen}
                    />
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar)

export default Container