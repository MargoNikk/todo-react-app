import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddNewItem from '../add-new-item';

import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.newId = 1;

    this.state = {
      todoData: [
        this.createToDoItem('Drink coffee'),
        this.createToDoItem('Build app'),
        this.createToDoItem('Have a lunch')
      ],
      term: '',
      statusFilter: 'active'
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.toogleDone = this.toogleDone.bind(this);
    this.toogleImportant = this.toogleImportant.bind(this);
    this.setSearchValue = this.setSearchValue.bind(this);
    this.setFilterStatus = this.setFilterStatus.bind(this);
  }

  createToDoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.newId++
    }
  }

  deleteItem(id) {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      return {
        todoData: [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
        ]
      }
    });
  }

  addItem(text) {
    this.setState(({ todoData }) => {
      const data = this.createToDoItem(text);

      return {
        todoData: [...todoData, data]
      }
    });
  }

  toogleProperty(id, property) {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      return {
        todoData: [
          ...todoData.slice(0, idx),
          { ...todoData[idx], [property]: !todoData[idx][property] },
          ...todoData.slice(idx + 1)
        ]
      }
    });
  }

  toogleDone(id) {
    this.toogleProperty(id, 'done');
  }

  toogleImportant(id) {
    this.toogleProperty(id, 'important');
  }

  setSearchValue(seachText) {
    this.setState({
      term: seachText
    });
  }

  searchItem(items, term) {
    return items.filter((el) => el.label.toLowerCase().indexOf(term.toLowerCase()) !== -1);
  }

  filterItems(items, status) {
    switch (status) {
      case 'all':
        return items;
      case 'active':
        return items.filter((el) => !el.done);
      case 'done':
        return items.filter((el) => el.done);
      default:
        return items;
    };
  }

  setFilterStatus(status) {
    this.setState({
      statusFilter: status
    });
  }

  render() {
    const { todoData, term, statusFilter } = this.state;
    const doneCount = todoData
      .filter((el) => el.done)
      .length;
    const todoCount = todoData.length - doneCount;
    const visibleItems = this.filterItems(this.searchItem(todoData, term), statusFilter);

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />

        <div className="top-panel d-flex">
          <SearchPanel onSearchStart={this.setSearchValue} />
          <ItemStatusFilter filter={statusFilter} onChangeFilter={this.setFilterStatus} />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToogleDone={this.toogleDone}
          onToogleImportant={this.toogleImportant} />

        <AddNewItem onItemAdded={this.addItem} />
      </div>
    );
  }
}