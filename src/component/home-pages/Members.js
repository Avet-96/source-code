import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {foolData} from "../../data/foolData";


class Members extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <section className="our-members pt-100 pb-170 bg-light" data-scroll-index="5">
                <div className="container">

                    <div className="section-header">
                        <h2><small className="text-primary">Our</small> Members</h2>
                    </div>
                    <div className="row">
                        {foolData.membersData.map(v => <div
                            className="col-md-4 mb-30"
                            key={v.id}
                            data-aos="fade-up"
                            data-aos-duration={v.dad}>
                            <Link to="#" className="team-box-1">
                                <div className="grediant-overlay opacity-85"/>
                                <div className="grid-image">
                                    <img src={v.img} alt="Team Member"/>
                                </div>
                                <div className="grid-body">
                                    <h6 className="grid-title">{v.name}</h6>
                                    <p className="grid-description">{v.status}</p>
                                </div>
                            </Link>
                        </div>)}
                    </div>
                </div>
            </section>
        );
    }
}

export default Members;