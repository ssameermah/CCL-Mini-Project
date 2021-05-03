import React, { Component } from 'react';
import PropTypes from 'prop-types';
import photo from '../assets/img/photo.jpg';

export class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mini-container jumbotron">
                <div class="media">
                    <h1>CCL PROJECT</h1>
                </div>
            </div>
        );
    }
}

export default About;