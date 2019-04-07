import React from 'react';
import axios from 'axios';







export default class Chien extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
      status: "success",
      message: "https://images.dog.ceo/breeds/pembroke/n02113023_3167.jpg"
   

    }
  }




  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      this.setState({ imageURL: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });
  }
  



  render() {
    const { imageURL } = this.state;
    return (
      <img src={imageURL} />
    );
  }


}
