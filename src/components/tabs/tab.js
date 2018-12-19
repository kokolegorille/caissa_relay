import React, { Component } from 'react';

export default class Tab extends Component {
  render() {
    const {
      handleOnClick,
      props: {
        activeTab,
        label,
        index,
      }
    } = this;

    const cssClass = activeTab === index ? "active" : "";

    return (
      <li className="nav-item">
        <a onClick={handleOnClick} className={`nav-link ${cssClass}`} >{label}</a>
      </li>
    );
  }

  handleOnClick = () => {
    const { index, handleOnClick } = this.props;
    handleOnClick(index);
  }
}