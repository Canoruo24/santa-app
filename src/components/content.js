import React, { Component } from 'react';
import List from './list';

class Content extends Component {
    render() {
        const data = this.props.data;
        return (
            
            <li>
                <p>Santa: Make a wish</p>
                <div><b>{data.first}</b></div>
                <div><b>{data.second}</b></div>
                <div><b>{data.third}</b></div>
            </li>
        )
    }
}

export default Content;