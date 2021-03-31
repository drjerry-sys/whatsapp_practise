import React, { Component } from 'react';
import ChatLine from './chat-line';

const ChatBoundary = (props) => {
    return ( 
        <div className="container-fluid p-5 bg-dark width-50">
            <h5 className="text-white badge badge-dark text-center p-1 mx-auto" style={{width: 'inherit'}} >TODAY</h5>
            <ChatLine {...props} />
        </div>
     );
    }
 
export default ChatBoundary;