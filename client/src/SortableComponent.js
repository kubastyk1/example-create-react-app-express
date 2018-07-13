import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import './SortableComponent.css';

const SortableItem = SortableElement(({value}) =>
  <li className="Showcase__style__stylizedItem">
    <div className="col-md-6">{value.original}</div>
    -
    <div className="col-md-6">{value.translated}</div>
  </li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <div>
      <li className="Showcase__style__stylizedItem list-info">
        <div className="col-md-6">Original</div>
        <div className="col-md-6">Translated</div>
      </li>
      <ul>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </ul>
    </div>
  );
});

class SortableComponent extends Component {
state = {
    items: [],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  updateItemsStatus = () => {
    this.setState({
      items: this.props.items,
    });
  };
  render() {
    if (this.state.items.length === 0 && this.props.items.length !== 0) {
      this.updateItemsStatus()
    }
    return (
      <div className="Showcase__style__stylizedList Showcase__style__list">
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
      </div>
    )
  }
}

export default SortableComponent;
