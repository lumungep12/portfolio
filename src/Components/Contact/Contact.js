import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact Me Here</h1>
                <p>WorkDays and Work Rate</p>
                <div className="contact">
                <div className="contactForm">
                    <h2>Send Me A Message</h2>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="text" placeholder="Your message" />
                    <button className="buton">Send Message</button>
                </div>
                <div className="img">
                    <p>Illustration Here</p>
                </div>
                </div>
                <div className="additional">
                    <div>
                        <p>Icon here</p>
                        <p>Nairobi Kenya Kasarani</p>
                    </div>
                    <div>
                        <p>icon here</p>
                        <p>+254726389483</p>
                        <p>+254726389483</p>
                    </div>
                    <div>
                        <p>icon here</p>
                        <p>+lumungep12@gmail.com</p>
                    </div>
                </div>
                <div className="socialMedia">
                    <div>
                        <p>Instagram</p>
                    </div>
                    <div>
                        <p>Github</p>
                    </div>
                </div>
            </div>
        )
    }
}
