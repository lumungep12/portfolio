import React, { Component } from 'react';

export default class Work extends Component {
    render() {
        return (
            <section className="workSection">
                <h1 className="section-title">Work Showcase</h1>
            <div className="works">
                <div className="card">
                    <h1>Ecommerce Bakery Website</h1>
                </div>
                <div className="card">
                    <h1>Second Hand Ecommerce Store</h1>
                </div>
                <div className="card">
                    <h1>Portfolio Websites</h1>
                </div>
                <div className="card">
                    <h1>Web Rework</h1>
                </div>
                <div className="card">
                    <h1>Python Webscraper</h1>
                </div>
                <div className="card">
                    <h1>Search Engine Optimization</h1>
                </div>
            </div>
            <button class="work-button">Show Me More</button>
            </section>
        )
    }
}
