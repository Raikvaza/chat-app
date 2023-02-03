import React, {Component} from "react";
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import './App.css';
import {connect, sendMsg} from './api';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      chatHistory: []
    }
  }
  componentDidMount(){
    connect((msg) => {
      console.log('New Message')
      this.setState(prevState => ({
        chatHistory: [...prevState.chatHistory, msg]
      }))
      console.log(this.state);
    })
  }

  send(event) {
    if (event.keyCode === 13 || event.keyCode === 2) {
      if (document.getElementById('input').value !== ""){
        sendMsg(document.getElementById('input').value); // Use the sendMsg function from api/index.js
        document.getElementById('input').value = "";  // Erase the contents of an input field
        return
      }
    } 
  }
  sendButton(){
    if (document.getElementById('input').value !== ""){
      sendMsg(document.getElementById('input').value); // Use the sendMsg function from api/index.js
      document.getElementById('input').value = "";  // Erase the contents of an input field
      return
    }
  }
  render(){
    return(
      <div className="App">
        <Header/>
        <ChatHistory chatHistory={this.state.chatHistory}/>
        <ChatInput send={this.send} sendButton={this.sendButton}/>
      </div>
    )
  }
}
export default App;