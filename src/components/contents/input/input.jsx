import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './input.scss';

class InputContact extends Component {
  render() {
    return (
      <>
      <img className="img-ballon" alt="ballon" height="40" src="https://www.stickersmalin.com/images/ajoute/prd/172/172418-image2_448x448.png" />
      <img className="img-ballon2" alt="ballon" height="40" src="https://www.stickersmalin.com/images/ajoute/prd/172/172418-image2_448x448.png" />
      <img className="img-ballon3" alt="ballon" height="40" src="https://www.stickersmalin.com/images/ajoute/prd/172/172418-image2_448x448.png" />
      <div className="lolo-container">
        <p className="lolo">Contact us</p>
      </div>
      <Container className="inputform">
        <div className="App">
          <div className="padding-input">
            <form action="/action_page.php">
              <label className="shadow-text">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
              <label className="shadow-text">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
              <label className="shadow-text">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" />
              <label className="shadow-text">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
              <input id="submitcontact" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Container>
      </>
    );
  }
}

export default InputContact;