import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="main-footer">
                    <div className="footer-cta">
                        <h1>Let's Work Together</h1>
                        <p>Have an idea you want on the internet?</p>
                        <button>Get in Touch</button>
                    </div>
                </div>
                <div className="copyright">
                    <p> &copy; 2021 lumunge.me. All Rights Reserved.</p>
                </div>
            </footer>
        )
    }
}
