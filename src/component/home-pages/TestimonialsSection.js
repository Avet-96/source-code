import React, {Component} from 'react';
import {connect} from "react-redux";
import {foolData} from "../../data/foolData";


class TestimonialsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <section className="testimonials-section section-spacer bg-light" data-scroll-index="4">
                <div className="container">

                    <div className="section-header">
                        <h2><small className="text-primary">Happy Students</small> Testimonials</h2>
                    </div>
                    <div className="slider-for">
                        {foolData.singleTotalItem.map(v => <div key={v.id} className="item"><p>{v.text}</p></div>)}
                    </div>
                    <div className="slider-nav">
                        {foolData.testimonialNavItem.map(v =>
                            <div key={v.id} className="meta-data slick-slide slick-cloned" style={{width:296}}>
                                <div className="author-image">
                                    <img src={v.img} alt="as"/>
                                </div>
                                <h6>{v.name} <small>{v.s_name} </small></h6>
                            </div>)}
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
)(TestimonialsSection)

export default Container