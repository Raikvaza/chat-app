import React, {Component} from 'react';
import './ChatHistory.css';
import Message from '../Message/Message';

class ChatHistory extends Component{
    render(){
        console.log(this.props.chatHistory);
        const messages = this.props.chatHistory.map(msg=> <Message key={msg.timeStamp} message={msg.data}/>);
        return (
            <div className='chat-history-container'>
                <h2>Chat History</h2>
                <div className='chat-history-messages'>
                {messages}
                </div>
            </div>
        );
    };
}

export default ChatHistory;