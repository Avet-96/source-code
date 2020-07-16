import React, {Component} from 'react';
import GetStartedForm from "./footer=pages/GetStartedForm";

class GetStarteadModal extends Component {
    render() {
        return (
            <div className="modal fade" id="getstarted" tabIndex="-1" role="dialog" aria-labelledby="getstarted">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header align-items-center">
                            <h4>Get Your Quote.</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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

export default GetStarteadModal;