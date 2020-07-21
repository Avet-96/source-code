import React, {Component} from 'react';
import {buttons, scrollData} from "../../../data/foolData";
import {dataScrollTop} from "../../../store/action/loginAndRegistration";
import {connect} from "react-redux";

let id = null
let isTop = true
let click = true

class DataScrollMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: 0,
            name: '',

        }
    }

    goToPage = (e) => {
        if (click) {
            window.scrollY >= scrollData[e.target.name] ? isTop = true : isTop = false
            Object.keys(scrollData).forEach(v => {
                if (v === e.target.name) {
                    id = setInterval(() => {
                        window.scrollTo(0, isTop
                            ? window.scrollY - 150
                            : window.scrollY + 150
                        )
                        this.setState({scroll: window.scrollY, name: v})
                    }, 8)
                }
            })
            buttons.forEach(v => v.name === e.target.name ? v.clN = 'scroll-item nav-link active' : v.clN = 'scroll-item nav-link')

        }
        click = false
    }

    render() {
        if (isTop) {
            if (this.state.scroll <= scrollData[this.state.name]) {
                clearInterval(id)
                click = true
            }
        } else {
            if (this.state.scroll >= scrollData[this.state.name]) {
                clearInterval(id)
                click = true
            }
        }

        return (
            <div className={this.props.openModal ?
                "collapse navbar-collapse " :
                "collapse navbar-collapse show"
            }
                 id="navbarNav">
                <div className="navbar-nav ml-auto align-items-center">
                    {buttons.map(v =>
                        <button
                            key={v.id}
                            style={v.style}
                            className={v.clN}
                            data-scroll-nav={v.dsn}
                            name={v.name}
                            onClick={e => this.goToPage(e)}
                        >
                            {v.title}
                        </button>
                    )}
                    <span className="menu-arrow"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    name: state.loginAndRegistration.name
})
const mapDispatchToProps = {}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(DataScrollMenu)

export default Container