import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {foolData} from "../../../data/foolData";

class CopyriftText extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-3">
                <h5>Tweets</h5>
                <div className="tweets-carousel owl-carousel" style={{display: 'block'}}>
                    {foolData.tweetData.map(v => <div
                        key={v.id}
                        className="single-tweet">
                        {v.icon}
                        <p><Link to={v.ref}><span className="text-primary">{v.title}</span></Link>
                            {v.text}</p>
                        <span className="timestamp">{v.textTow}</span>
                    </div>)}
                </div>
            </div>
        );
    }
}

export default CopyriftText;