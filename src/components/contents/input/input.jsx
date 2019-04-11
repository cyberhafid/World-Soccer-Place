import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './input.scss';

class InputContact extends Component {
  render() {
    return (
      <Container className="inputform">
        <div className="App">
          <p><img alt="ballon" height="30" src="https://www.stickersmalin.com/images/ajoute/prd/172/172418-image2_448x448.png" /> Contact us <img height="30" height="30" src="https://www.stickersmalin.com/images/ajoute/prd/172/172418-image2_448x448.png" /></p>
          <div className="padding-input">
            <form action="/action_page.php">
              <label>First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
              <label>Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
              <label>Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" />
              <label>Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default InputContact;