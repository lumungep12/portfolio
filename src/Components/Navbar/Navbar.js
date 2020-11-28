import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        lumunge
                    </div>
                    <ul className="menu">
                        <li>
                            <a href="#!">Work</a>
                        </li>
                        <li>
                            <a href="#!">About</a>
                        </li>
                        <li>
                            <a href="#!">Blog</a>
                        </li>
                        <li>
                            <a href="#!">Contact</a>
                        </li>
                    </ul>
                </header>
            </div>
        )
    }
}
