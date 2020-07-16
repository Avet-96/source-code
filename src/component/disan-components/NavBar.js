import React, {Component} from 'react';
import {Link} from "react-router-dom";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="col-md-6 col-lg-3">
                <h5>{this.props.name} </h5>
                <nav>
                    <ul>
                        {this.props.data.map(v => <li
                        key={v.id}
                        ><Link to={v.href}>{v.title}</Link></li>)}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;