import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {openModal} from "../../../store/action/loginAndRegistration";
import {connect} from "react-redux";


let text = ["Web development", "Mobile development", "Web and mobile design"]


class HomeBannerText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noStatWidth: 0,
            isWith: true,
            textId: 1,
            texts: '',
            openModal: false
        }
    }


    componentDidMount() {
        let i = 0
        let g = text.length
        let d = 0
        setInterval(() => {
            if (i < text[0].length) {
                this.setState({texts: text[d].slice(0, i)})
                i++
                if (i === text[0].length) {
                    g = text[0].length
                }
            } else {
                this.setState({texts: text[d].slice(0, g)})
                g--
                if (g === 0) {
                    i = 0
                    d !== text.length - 1 ? d++ : d = 0
                }
            }
        }, 160)
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto" data-aos="fade-up" data-aos-duration="600"
                     data-aos-delay="500">

                    <div className="home-content">
                        <h1 className="extra-large-heading">
                            <span className="font-weight-extralight"/>Source Code <br/> We have
                            solution for all your needs!<br/><span>{this.state.texts}|</span>
                        </h1>
                        <div className="clearfix mt-30">
                            <button
                                className="btn btn-outline-white mr-2"
                                data-toggle="modal"
                                data-target="#getstarted"
                                onClick={() => this.props.openModal(true)}
                            >
                                Start now
                            </button>
                            <button className="btn btn-white">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

const mapStateToProps = (state) => ({
    bool: state.loginAndRegistration.bool
})
const mapDispatchToProps = {
    openModal
}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeBannerText)

export default Container