import React, {Component} from 'react';
import Navigation from './components/navigation/Navigation'
import Clarifai from 'clarifai'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/ImageLinkForm//ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
  apiKey: '06f1092e92ab47ef82b43324d147452b'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
} 

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imgUrl: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
    this.setState({input: event.target.value})
  }

onButtonSubmit = () => {
  this.setState({imgUrl: this.state.input})
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL,
     this.state.input)
  .then(
    function(response) {
      console.log(response)
    },
    function(err) {
    }
  );
}

  render() {
  return (
    <div className='App'>
    <Particles className='particles' 
      params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit} />
      <FaceRecognition imgUrl={this.state.imgUrl} />
    </div>
  )
}
}

export default App;
