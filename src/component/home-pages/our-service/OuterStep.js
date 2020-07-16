import React, {Component} from 'react';
import OuterStepCintent from "./OuterStepCintent";

class OuterStep extends Component {
    render() {
        return (
            <section className="services-section pt-100 pb-80 bg-light" data-scroll-index="2">
                <div className="container">
                    <div className="section-header center">
                        <h2 className="text-grediant d-inline-block">Our Services</h2>
                        <p className="subtitle">
                            We Offer Awesome Sevrices That Full Fill Your Needs
                        </p>
                    </div>
                    <OuterStepCintent/>
                </div>
            </section>
        );
    }
}

export default OuterStep;