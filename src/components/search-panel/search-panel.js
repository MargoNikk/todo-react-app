import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    constructor (props) {
        super(props);

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange (e) {
        this.props.onSearchStart(e.target.value);
    }

    render () {
        return  <input type="text"
                       className="form-control search-input"
                       onChange={this.onSearchChange}
                       placeholder='Type here to search' />; 
    }
}
