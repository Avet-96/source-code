import React, {Component} from 'react';

import {foolData} from "../../../data/foolData";
import OurStapeFooter from "./OurStapeFooter";


class OurSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <section className="pt-100 pb-80 bg-light our-steps mt--40" data-scroll-index="1">
                    <div className="container">
                        <div className="section-header">
                            <h2><small className="text-primary">Our</small> Steps</h2>
                        </div>
                        <div className="row">
                            {foolData.ourStepsData.map(v =>
                                <div
                                    key={v.id}
                                    className="col-md-4 mb-30" data-aos="fade-up" data-aos-duration={v.dad}>
                                    <div className="our-step">
                                        <div className="step-number text-grediant">
                                            {v.stepNumber}
                                        </div>
                                        <h6>{v.title}</h6>
                                        <p>{v.text}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <OurStapeFooter/>
            </>
        );
    }
}

export default OurSteps;