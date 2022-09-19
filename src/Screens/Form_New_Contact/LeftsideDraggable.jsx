import React, { Component } from "react";

import { Row, Col } from "antd";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import CheckBoxInput from "../../Components/CheckBoxInput";

import "./LeftsideDraggable.scss";

const SortableItem = sortableElement(({ value }) => (
  <CheckBoxInput item={value} />
));

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

class LeftsideDraggable extends Component {
  state = {
    items: [
      {
        id: 1,
        defaultValue: "Title",
        checkbox: true,
      },
      {
        id: 2,
        defaultValue: "First name",
        checkbox: true,
      },
      {
        id: 3,
        defaultValue: "Last name",
        checkbox: true,
      },
      {
        id: 4,
        defaultValue: "E-Mail",
        checkbox: false,
      },
      {
        id: 5,
        defaultValue: "Phone number",

        checkbox: true,
      },
      {
        id: 6,
        defaultValue: "Newsletter subscription",
        checkbox: true,
      },
      {
        id: 7,
        defaultValue: "Donation receipt",
        checkbox: true,
      },
    ],
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  render() {
    const { items } = this.state;
    return (
      <div id="drag">
        <SortableContainer onSortEnd={this.onSortEnd}>
          {items.map((value, index) => (
            <SortableItem key={value.id} index={index} value={value} />
          ))}
        </SortableContainer>
      </div>
    );
  }
}

export default LeftsideDraggable;
