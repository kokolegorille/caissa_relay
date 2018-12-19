// https://alligator.io/react/tabs-component/

import React, { Component } from 'react';

import Tab from './Tab';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }
  
  onClickTab = (tab) => {
    this.setState({activeTab: tab});
  }

  render() {
    const {
      onClickTab,
      props: {
        labels,
        children,
      },
      state: {
        activeTab
      }
    } = this;
    return (
      <div>
        <ul className="nav nav-tabs">
          {children.map((child, index) => {
            const label = labels[index];
            return (
              <Tab
                activeTab={activeTab}
                key={index}
                label={label}
                handleOnClick={onClickTab}
                index= {index}
              />
            );
          })}
        </ul>
        <div>
         {children[activeTab]}
        </div>
      </div>
    );
  }
}