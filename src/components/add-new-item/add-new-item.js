import React, { Component } from "react";

import './add-new-item.css';

export default class AddNewItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            label: ''
        };

        this.onLabelChange = this.onLabelChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onLabelChange(e) {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.label !== '') {
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: '' 
            });
        }
    }

    render() {
        return (
            <form className="add-new-item-box d-flex" onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="What should be done?"
                    value={this.state.label} />
                <button className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        );
    }
};