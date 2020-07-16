import React, {Component} from 'react';
import {foolData} from '../../../data/foolData'


class OuterStepCintent extends Component {
    render() {
        return (
            <div className="row">
                {foolData.outerStepData.map(v => <div className="col-md-6 col-lg-4" data-aos="fade-up"
                                                      key={v.id}
                                                      data-aos-duration={v.dod}>
                    <div className="service-card border-img"
                         style={v.style}>
                        <div className="icon-img">
                            {v.icon}
                        </div>
                        <div className="service-body">
                            <h6 className="service-title">{v.title}</h6>
                            <p className="service-description ">
                                {v.text}
                            </p>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}

export default OuterStepCintent;