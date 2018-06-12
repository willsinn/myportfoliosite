import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <div style={{display:'flex'}}>
            {this.props.skillOne}
          </div>
        </Cell>
        <Cell col={4}>
          <div style={{display:'flex'}}>
            {this.props.skillTwo}
          </div>
        </Cell>
        <Cell col={4}>
          <div style={{display:'flex'}}>
            {this.props.skillThree}
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
