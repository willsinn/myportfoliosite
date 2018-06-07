import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import MyAvatar from './Assets/MyAvatar.png';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={MyAvatar}
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Software Engineer</h1>
              <hr/>
              <p> HTML | CSS | JavaScript | React | React Native | NodeJS | VBA | GoogleScripts API </p>
              <div className="social-links">

              {/* Linkedin */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fas fa-linkedin-square" aria-hidden="true"></i>
                </a>

              {/* GitHub */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fas fa-github-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
