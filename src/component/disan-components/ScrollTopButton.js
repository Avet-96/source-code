import React, {Component} from 'react';

let id = null

class ScrollTopButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            y: 0
        }
    }


    handleClick = () => {
        id = setInterval(() => {
            window.scrollTo(0, window.scrollY - 150)
            this.setState({y:window.scrollY})
        }, 8)
    }

    render() {
        if (this.state.y <= 0) {
            clearInterval(id)
        }
        return (
            <div className="scroll-top-btn" data-scroll-goto="0"
                 style={{display: this.props.scroll ? 'block' : 'none'}}>
                <button onClick={this.handleClick} className="scroll-top">
                    <span className="scroll-top-icon"/>
                </button>
            </div>
        );
    }
}

export default ScrollTopButton;