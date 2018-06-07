import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';


class Projects extends Component {
    constructor() {
      super();
      this.state = { activeTab:0 };
    }

    toggleCategories() {
      if(this.state.activeTab === 0){
        return(
          <div><h1>This is React</h1></div>
        )
      } else if(this.state.activeTab === 1){
        return(
          <div><h1>This is GoogleSheets</h1></div>
        )
      } else if(this.state.activeTab === 2){
        return(
          <div><h1>This is React-Redux</h1></div>
        )
      }
      else if(this.state.activeTab === 3){
        return(
          <div><h1>This is Calculatr</h1></div>
        )
      }
      }
    }
  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab:tabId})} ripple>
          <Tab>React</Tab>
          <Tab>GoogleSheets API</Tab>
          <Tab>React-Redux</Tab>
          <Tab>Calculator</Tab>
        </Tabs>
      </div>
    );
  }
}

export default Projects;
