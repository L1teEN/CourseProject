import React from 'react';
import './OurClients.css';

function OurClients() {
    return (
        <div className="our-clients" id="clients">
            <div>
                <h3 className="block-heading">Our clients are</h3>
                <img src="https://imgur.com/LjEAM7v.png" alt="separator" className="img-separator"/>
                <p className="paragraph">“Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.<br />
                    Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit”</p>
                <p className="italic-paragraph">Mr.Lorem Ipsum</p>
                <div className="clients-logos">
                    <div className="logo">
                        <img src="https://i.imgur.com/IpQ19xG.png" alt="logo" className="logo" />
                    </div>

                    <div className="logo">
                        <img src="https://i.imgur.com/vUqL2Ft.png" alt="logo" className="logo" />
                    </div>

                    <div className="logo">
                        <img src="https://i.imgur.com/btFox3X.png" alt="logo" className="logo" />
                    </div>

                    <div className="logo">
                        <img src="https://i.imgur.com/7kK0HVq.png" alt="logo" className="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients;