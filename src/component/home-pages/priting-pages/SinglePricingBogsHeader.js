import React, {Component} from 'react';
import {foolData} from "../../../data/foolData";

class SinglePricingBogsHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="row">
                {foolData.singlePricingData.map(v => <div
                    className="col-md-4 mb-30"
                    data-aos="zoom-in"
                    key={v.id}
                    data-aos-duration={v.dad}>
                    <div className="pricing-card-box-1 box-shadow">
                        <div className="pricing-header bg-primary">
                            <h4 className="plan-title">{v.title} <br/> {v.titleBr}</h4>
                            <h2 className="plan-price">
                                <strong><sup></sup>{v.price}<small>{v.titleTo}</small></strong>
                            </h2>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-unstyled">
                                <li>
                                    <ul>{v.navTitle}
                                        {v.nav.map(k => <li key={k.id}>{k.icon}{k.title}</li>)}
                                    </ul>
                                </li>
                                {v.navLi.map(d => <li key={d.id}><strong>{d.strongTitle}</strong>{d.title}</li>)}
                            </ul>

                        </div>
                    </div>
                </div>)}


            </div>
        );
    }
}

export default SinglePricingBogsHeader;