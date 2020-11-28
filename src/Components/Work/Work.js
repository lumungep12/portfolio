import React, { Component } from 'react';

export default class Work extends Component {
    render() {
        return (
            <div className="workSection">
            <div className="works">
                <div className="work">
                    <h1>Ecommerce Bakery Website</h1>
                </div>
                <div className="work">
                    <h1>Second Hand Ecommerce Store</h1>
                </div>
                <div className="work">
                    <h1>Portfolio Websites</h1>
                </div>
                <div className="work">
                    <h1>Web Rework</h1>
                </div>
                <div className="work">
                    <h1>Python Webscraper</h1>
                </div>
                <div className="work">
                    <h1>Search Engine Optimization</h1>
                </div>
            </div>
            <button className="buton">Show Me More</button>
            </div>
        )
    }
}
