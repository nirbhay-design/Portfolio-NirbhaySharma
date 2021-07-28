import './App.css';
import AboutMe from './AboutMe'
import images from './my_sketch.jpeg'
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
// import {Redirect} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      
      <h1>Hello good to see you here !! </h1>
      <h1>This is Nirbhay Sharma</h1>

      {/* <div className="main__content"> */}
          <div className="image__credentials">
              <div className="contacts__details">
                <a href='https://github.com/nirbhay-design?tab=repositories'><IconButton className="icons">
                  <GitHubIcon className="icon__value" fontSize="large"/>
                </IconButton></a>
                <a href="https://www.linkedin.com/in/nirbhay-sharma-a2b846204/"><IconButton className="icons">
                  <LinkedInIcon className="icon__value" fontSize="large"/>
                </IconButton></a>
                <a href="mailto:sharma.59@iitj.ac.in"><IconButton className="icons">
                  <EmailIcon className="icon__value" fontSize="large"/>
                </IconButton></a>
                <a href="https://github.com/nirbhay-design/Nirbhay-resume"><IconButton className="icons">
                  <DescriptionIcon className="icon__value" fontSize="large"/>
                </IconButton></a>
              </div>
              <img src={images} alt="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/71fdaed1-dcde-4ed2-9b68-207e1e5c12bb/de3q4ou-97eeccfb-81a6-4d44-86d3-a5d46b4b5a09.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxZmRhZWQxLWRjZGUtNGVkMi05YjY4LTIwN2UxZTVjMTJiYlwvZGUzcTRvdS05N2VlY2NmYi04MWE2LTRkNDQtODZkMy1hNWQ0NmI0YjVhMDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Xw80m8052EQF42oGHDyF4WuMrbzQZC0eibUd13VAw-I" className="my__img" />
          </div>
          <AboutMe/>
      {/* </div> */}
    </div>
  );
}

export default App;
