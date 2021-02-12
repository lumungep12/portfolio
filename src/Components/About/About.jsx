import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className="about-section">
                <h1>About Me</h1>
                    <div className="about">
                    <div className="potrait">
                        <p>image here</p>
                    </div>
                    <div className="bio">
                        <p>Am more than what i have been told i am, one of the things i do is write code 
                        that does stuff and mainly this stuff helps small businesses grow beyond what they can handle</p>
                    </div>
                </div>
                <button className="hire">Hire Me</button>
            </section>
        )
    }
}
