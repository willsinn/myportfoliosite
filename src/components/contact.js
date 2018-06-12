import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>William Sinn</h2>
            <img
              src="https://cdn.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height:'250px'}}
              />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
          </Cell>
          <Cell col={6}>
            <h2> Contact Me </h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton' }}>
                    <i className="fas fa-phone-square" aria-hidden="true"/>
                    1-(917)-650-7716
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton' }}>
                    <i className="fas fa-envelope-square" aria-hidden="true"/>
                    w.h.sinn@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton' }}>
                  <i className="fas fa-home" aria-hidden="true" />
                  address
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
