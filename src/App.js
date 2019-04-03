import React from 'react';
import './App.css';
import FlashcardDeck from './components/FlashcardDeck';
import Splash from './components/Splash'
import { Row } from 'antd';
import 'antd/dist/antd.css';
import log from './components/log'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      appClicked: true,
      message: "",
      languageOne: '',
      languageTwo: '',
      log:new log(),
    }
  }

  handleClick = (e) => {
    console.log(e.target.parentNode.children[1])
    if(e.target.parentNode.children[1].value !== '' && e.target.parentNode.children[2].value !== ''){
      this.setState({ 
        appClicked: false,
        languageOne:e.target.parentNode.children[4].value,
        languageTwo:e.target.parentNode.children[6].value,
      });
      this.state.log.writeNameEmail(e.target.parentNode.children[1].value,e.target.parentNode.children[2].value);
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
