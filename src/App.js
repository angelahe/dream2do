import React from 'react';
import './App.css';
import FlashcardDeck from './components/FlashcardDeck';
import Splash from './components/Splash'
import { Row } from 'antd';
import 'antd/dist/antd.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      appClicked: true,
      message: "",
      languageOne: '',
      languageTwo: '',
    }
  }

  handleClick = (e) => {
    // console.log(e.target.parentNode.children[5])
    if(e.target.parentNode.children[0].value !== '' && e.target.parentNode.children[1].value !== ''){
      this.setState({ 
        appClicked: false,
        languageOne:e.target.parentNode.children[3].value,
        languageTwo:e.target.parentNode.children[5].value,
      });
    }
  }

  homeScreen = () => {
    this.setState({
      appClicked: true,
    })
  }

  render() {
    return (

      <Row id='ant-row'>
        {this.state.appClicked
          ?
          <Splash handleClick={this.handleClick} />
          : <FlashcardDeck {...this.state} homeScreen={this.homeScreen}/>
        }

      </Row>
    );
  }
}

export default App;
