import React, { Component } from 'react';
import proj1 from '../../img/proj1.webp';
import proj2 from '../../img/proj2.webp';
import proj3 from '../../img/proj3.webp';
import proj4 from '../../img/proj4.webp';
import proj5 from '../../img/proj5.webp';
import proj6 from '../../img/proj6.webp';

export default class Work extends Component {
    render() {
        return (
            <section className="workSection">
                <h4 className="section-title">Work Showcase</h4>
            <div className="works">
                <div className="card">
                    <div className="work-image">
                        <img src={proj1} alt=""/>
                    </div>
                    <div className="work-details">
                        <div className="details">
                            <h4>Ecommerce Bakery Website <br/> <span>Caro Cakes</span></h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, modi sequi consequuntur commodi laudantium cumque perspiciatis unde sint ipsum dolorum!</p>
                            <a href="#!">Check Out</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="work-image">
                        <img src={proj2} alt=""/>
                    </div>
                    <div className="work-details">
                        <div className="details">
                            <h4>Ecommerce Bakery Website <br/> <span>Caro Cakes</span></h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, modi sequi consequuntur commodi laudantium cumque perspiciatis unde sint ipsum dolorum!</p>
                            <a href="#!">Check Out</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                <div className="work-image">
                        <img src={proj3} alt=""/>
                    </div>
                    <div className="work-details">
                        <div className="details">
                            <h4>Ecommerce Bakery Website <br/> <span>Caro Cakes</span></h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, modi sequi consequuntur commodi laudantium cumque perspiciatis unde sint ipsum dolorum!</p>
                            <a href="#!">Check Out</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                <div className="work-image">
                        <img src={proj4} alt=""/>
                    </div>
                    <div className="work-details">
                        <div className="details">
                            <h4>Ecommerce Bakery Website <br/> <span>Caro Cakes</span></h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, modi sequi consequuntur commodi laudantium cumque perspiciatis unde sint ipsum dolorum!</p>
                            <a href="#!">Check Out</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                <div className="work-image">
                        <img src={proj5} alt=""/>
                    </div>
                    <div className="work-details">
                        <div className="details">
                            <h4>Ecommerce Bakery Website <br/> <span>Caro Cakes</span></h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, modi sequi consequuntur commodi laudantium cumque perspiciatis unde sint ipsum dolorum!</p>
                            <a href="#!">Check Out</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                <div className="work-image">
                        <img src={proj6} alt=""/>
                    </div>
                    <div className="work-details">
                        <div className="details">
                            <h4>Ecommerce Bakery Website <br/> <span>Caro Cakes</span></h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, modi sequi consequuntur commodi laudantium cumque perspiciatis unde sint ipsum dolorum!</p>
                            <a href="#!">Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <button class="work-button">Show Me More</button>
            </section>
        )
    }
}
