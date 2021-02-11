import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="logo">
                      <a href="/home"> lumunge </a> 
                    </div>
                    <ul className="menu">
                        <li className="nav-link">
                            <a href="#!">Work</a>
                        </li>
                        <li className="nav-link">
                            <a href="#!">About</a>
                        </li>
                        <li className="nav-link">
                            <a href="#!">Blog</a>
                        </li>
                        <li className="nav-link">
                            <a href="#!">Contact</a>
                        </li>
                    </ul>
                </header>
            </>
        )
    }
}
