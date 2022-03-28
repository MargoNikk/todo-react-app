import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
  constructor(props) {
    super(props);

    this.buttons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Done' }
    ];
  }

  onChangeFilter(name) {
    this.props.onChangeFilter(name);
  }

  render() {
    const { filter } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const cssClass = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button"
          className={`btn ${cssClass}`}
          key={name}
          onClick={this.props.onChangeFilter.bind(this, name)}>
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}