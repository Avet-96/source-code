import React, {Component} from 'react';
import ScrollTopButton from "./disan-components/ScrollTopButton";

class Wraper extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <ScrollTopButton scroll={this.props.scroll}/>
                {this.props.children}
            </div>
        );
    }
}

export default Wraper;