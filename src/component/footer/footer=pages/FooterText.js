import React, {Component} from 'react';
import {foolData} from "../../../data/foolData";
import NavBar from "../../disan-components/NavBar";
import {Link} from "react-router-dom";
import CopyriftText from "./CopyriftText";

class FooterText extends Component {
    render() {
        return (
            <div className="row">
                {foolData.footerTextData.map(v => <div
                    key={v.id}
                    className="col-md-6 col-lg-3">
                    <div className="logo">
                        <Link to="#">
                            <img className="w-50" src={v.img} alt="letstart"/>
                        </Link>
                    </div>
                    <p>{v.text}<br/>{v.textBr}</p>

                    <div className="social-link social-white mt-15">
                        {v.links.map(k => <Link to={k.ref} key={k.id}>{k.icon}</Link>)}
                    </div>
                </div>)}
                <NavBar name='Support' data={foolData.navBarDataOne}/>
                <NavBar name='Useful Links' data={foolData.navBarDataTow}/>
                <CopyriftText/>
                <div className="copyright">
                    <p>© Copyright 2020. SourceCode</p>
                </div>
            </div>
        );
    }
}

export default FooterText;