import React, { Component } from 'react';
import lumunge from './img/undraw_Code_review_re_woeb.svg'

export default class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="intro">
                    <h1>Jambo,</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias necessitatibus ad expedita impedit et autem reiciendis explicabo vitae dolor ipsam ipsum cumque magnam fuga aliquam voluptatum voluptas, quisquam nisi suscipit.</p>
                    <button>Link Up</button>
                </div>
                <div className="image-capture">
                    <img src={lumunge} alt=""/>
                </div>
            </div>
        )
    }
}
