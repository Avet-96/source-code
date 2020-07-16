import React, {Component} from 'react';
import {connect} from "react-redux";
import NavBar from "./header-pages/NavBar";
import {components} from "../data/foolData";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {isScroll: false}
    }

    componentDidMount() {
        let isTrue = true
        window.addEventListener('scroll', () => {
            this.setState({isScroll: window.scrollY > 0 ? isTrue : !isTrue})
        })
    }

    render() {
        return (
            <div className="page-wrapper">
                <header
                    className={
                        !this.state.isScroll ?
                            "header arrow-header gred-bg" :
                            'header arrow-header gred-bg fixed-nav'
                    }>
                    <NavBar/>
                </header>
                {components.map((v, i) => React.createElement(v, {key: i}))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default Container