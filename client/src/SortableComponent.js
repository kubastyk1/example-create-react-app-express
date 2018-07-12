import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <li className="Showcase__style__stylizedItem">{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value.original + " - " + value.translated} />
      ))}
    </ul>
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
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

export default SortableComponent;
