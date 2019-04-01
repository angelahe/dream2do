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
      message: ""
    }
  }

  handleClick = () => {
    this.setState({ appClicked: false });
  }

  render() {
    return (

      <Row>
        {this.state.appClicked
          ?
          <Splash handleClick={this.handleClick} />
          : <FlashcardDeck />
        }

      </Row>
    );
  }
}

export default App;
