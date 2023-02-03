import React, {Component} from 'react';
import './ChatInput.css'

class ChatInput extends Component{
    render(){
        return (
            <div className='ChatInput'>
                <input id='input' onKeyDown={this.props.send} placeholder="Type a message and Hit Enter to Send"/>
                <button id='button' onClick={this.props.sendButton}>Send</button>
            </div>
        )
    }
}

export default ChatInput;