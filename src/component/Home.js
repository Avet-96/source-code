import React, {Component} from 'react';
import {connect} from "react-redux";
import NavBar from "./header-pages/NavBar";
import {components} from "../data/foolData";
import Footer from "./footer/Footer";
import Wraper from "./Wraper";

import GetStarteadModal from "./footer/GetStarteadModal";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScroll: false,
            scrollY: 0
        }
    }


    componentDidMount() {
        let isTrue = true
        window.addEventListener('scroll', () => {
            this.setState({
                isScroll: window.scrollY > 0 ? isTrue : !isTrue,
                scrollY: window.scrollY
            })
            // // Object.keys(scrollData).forEach(k => {
            //      if (this.state.scrollY >= scrollData[k]) {
            //          buttons.forEach(v => v.name === k ? v.clN = 'scroll-item nav-link active' : v.clN = 'scroll-item nav-link')
            //      }
            //  })
        })
    }

    render() {
        return (
            <>
                <Wraper
                    className="page-wrapper"
                    scroll={this.state.isScroll}
                >
                    <header
                        className={
                            !this.state.isScroll
                                ? "header arrow-header gred-bg"
                                : 'header arrow-header gred-bg fixed-nav'
                        }>
                        <NavBar/>
                    </header>
                    {components.map((v, i) => React.createElement(v, {key: i}))}
                    <GetStarteadModal/>
                </Wraper>
                <Footer/>
            </>
        )
            ;
    }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default Container