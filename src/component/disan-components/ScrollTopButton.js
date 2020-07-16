import React, {Component} from 'react';

class ScrollTopButton extends Component {
    render() {
        return (
            <div className="scroll-top-btn" data-scroll-goto="0">
                <a href="#" className="scroll-top">
                    <span className="scroll-top-icon"></span>
                </a>
            </div>
        );
    }
}

export default ScrollTopButton;