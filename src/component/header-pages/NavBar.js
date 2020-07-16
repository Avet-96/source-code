import React, {Component} from 'react';
import {connect} from "react-redux";
import DataScrollMenu from './menu-pages/DataScrollMenu'
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container">

                    <div className="navbar-header">

                        <Link className="navbar-brand" to="#">
                            <img src={logo} alt="Letstart"/>
                        </Link>

                        <button className="navbar-toggler collapsed" type="button"
                                data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span/>
                            <span/>
                            <span/>
                        </button>
                    </div>

                    <DataScrollMenu/>
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