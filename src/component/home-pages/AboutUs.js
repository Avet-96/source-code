import React, {Component} from 'react';
import bg3 from '../../assets/images/bg3.jpg'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class AboutUs extends Component {
    render() {
        return (
            <section className="about-us pt-100 pb-80 pb-0" data-scroll-index="1">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-md-6 col-lg-7 mb-30">

                            <div className="section-header">
                                <h2><small className="text-primary">What We Are</small> About us</h2>
                            </div>

                            <div className="about-us-content">
                                <p>Source Code Company specializes in providing web programming services. Our goal is
                                    to guide our customers to find the best technology solutions that will suit their
                                    business
                                    needs. Sors Code uses the latest software development software Agile + DevOps,
                                    which helps us provide high-quality and cost-effective services in shortest
                                    deadlines.</p>
                                <div className="clearfix">
                                    <Link to="#" className="btn btn-primary">
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5">

                            <img src={bg3} alt="about us"/>

                            <div className="excellance-tag bg-primary">
                                <div className="excellance-text">
                                    <div className="icon">
                                        <i className="icon-trophy fa-3x"/>
                                    </div>
                                    <h3></h3>
                                    <p><small>Startup</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
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
)(AboutUs)

export default Container