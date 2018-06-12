import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './ResumeParts/Skills';
import Experience from './ResumeParts/Experience';
import Education from './ResumeParts/Education';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height:'200px'}}
                />
            </div>
            <h2 style={{paddingTop: '2em'}}> William Sinn </h2>
            <h4 style={{color: 'grey'}}> Software Engineer </h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <h5> Address </h5>
              <p> 3 Hanover Square, Apartment 3C, New York, New York, 10004 </p>
            <h5> Phone </h5>
              <p> 1-(917)-650-7716 </p>
            <h5> Email </h5>
              <p> w.h.sinn@gmail.com </p>
            <h5> Web </h5>
              <p> myportfoliowebsite.com </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
           </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2> Skills </h2>



            <Skills
              skill="JavaScript"
              progress={100}
              />

            <hr style={{borderBottom: '3px solid #e22947'}} />
            <h2> Experience </h2>

            <Experience
              startYear={2012}
              endYear={2018}
              jobName="Current Job"
              jobDescription="Bright Kids"
              />

            <Experience
              startYear={2012}
              endYear={2014}
              jobName="Second Job"
              jobDescription="Bright Kids"
              />

            <Experience
              startYear={2012}
              endYear={2018}
              jobName="First Job"
              jobDescription="Bright Kids"
              />

            <hr style={{borderBottom: '3px solid #e22947'}} />
            <h2> Education </h2>

            <Education
              startYear={2012}
              endYear={2018}
              schoolName="First Job"
              schoolDescription="Bright Kids"
              />







          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
