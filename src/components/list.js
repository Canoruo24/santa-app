import React, { Component } from 'react';
import Content from './content'
import Input from './input';


const INITIAL_STATE = {
    first: '',
    second: '',
    third: '',
}

class List extends Component {

    constructor() {
        super()

        this.state = INITIAL_STATE;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit(event) {
        event.preventDefault()

        if(this.state.contentVisible) {
            this.setState(INITIAL_STATE)
        } else {
            this.setState({ contentVisible: true })
        }
    }

    render() {

        const inputData = [
            {gifts: 'First', state: this.state.first, name: 'first'},
            {gifts: 'Second', state: this.state.second, name: 'second'},
            {gifts: 'Third', state: this.state.third, name: 'third'},
        ]

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="list__inputs">
                {
                    inputData.map(data => Input( (data), this.handleInputChange))
                }
                <button type="submit">{!this.state.contentVisible ? 'Generate Mad Lib' : 'Clear Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
                </div>
            </form>
        )
    }
}

export default List;