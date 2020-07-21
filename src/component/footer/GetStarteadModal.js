import React, {Component} from 'react';
import GetStartedForm from "./footer=pages/GetStartedForm";
import {connect} from "react-redux";
import {openModal} from "../../store/action/loginAndRegistration";

class GetStarteadModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        console.log(this.props)
        return (
            <div className={!this.props.bool ? "modal fade" : 'modal fade show'}
                 id="getstarted" tabIndex="-1"
                 role="dialog"
                 aria-labelledby="getstarted"
                 style={{display: !this.props.bool ? "none" : "block"}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center">
                            <h4>Get Your Quote.</h4>
                            <button
                                type="button" className="close"
                                data-dismiss="modal" aria-label="Close"
                                onClick={() => this.props.openModal(false)}
                            >
                                <i aria-hidden="true" className="icon-close"/></button>
                        </div>
                        <div className="modal-body">
                            <GetStartedForm/>
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
)(GetStarteadModal)

export default Container