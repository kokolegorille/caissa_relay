// https://alligator.io/react/tabs-component/

import React, { Component } from 'react';

import Tab from './Tab';

export default class Tabs extends Component {
  state = {activeTab: 0};
  
  onClickTab = index => this.setState({activeTab: index});

  render() {
    const {
      onClickTab,
      props: { labels, children },
      state: { activeTab },
    } = this;
    return (
      <div>
        <ul className="nav nav-tabs">
          {children.map((_, index) => {
            return (
              <Tab
                active={activeTab === index}
                key={index}
                label={labels[index]}
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