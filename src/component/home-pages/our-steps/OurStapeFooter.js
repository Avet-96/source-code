import React, {Component} from 'react';

class OurStapeFooter extends Component {
    render() {
        return (
            <section className="pt-100 pb-80 bg-light our-steps mt--40 border border-top border-bottom" data-scroll-index="2">
                <div className="text-center">
                    <div className="text">
                        <h2 className='text-grediant'>Portfolio</h2>
                        <h5>COMING SOON</h5>
                        <hr className="w-25"/>
                    </div>
                    <div className="bottomleft">
                        <p>We are a startup and we are dedicated to create successful projects. <br/>We'll soon post
                            projects that we're proud of.</p>
                    </div>
                </div>

            </section>

        );
    }
}

export default OurStapeFooter;