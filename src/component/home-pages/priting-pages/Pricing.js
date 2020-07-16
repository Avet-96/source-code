import React, {Component} from 'react';
import SinglePricingBogsHeader from "./SinglePricingBogsHeader";
import SinglePricingBoxFooter from "./SinglePricingBoxFooter";
import {connect} from "react-redux";

class Pricing extends Component {
    render() {
        return (
            <section className="pt-100 pb-80" data-scroll-index="4">
                <div className="container">

                    <div className="section-header">
                        <div className="row">
                            <div className="col-lg-4">
                                <h2 className="text-grediant d-inline-block">Training center</h2>
                            </div>
                            <div className="col-lg-8">
                                <p className="subtitle">
                                    Along with development, SourceCode has its own training center,
                                    where our qualified and experienced tutors teach various programming languages. Our
                                    approach to our students
                                    is with responsibility and care.
                                    Our goals are:<br/>
                                    • Deliver high quality services<br/>
                                    • Train well-demanded specialists<br/>
                                    • Develop ourselves and be walk along the newest technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <SinglePricingBogsHeader/>
                    <SinglePricingBoxFooter/>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pricing)

export default Container