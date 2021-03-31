import React, { Component } from 'react';

const chatPosition = (myid, sender)=> {
    let classes= "d-flex mt-3 "
    return myid == sender ? classes+="justify-content-end" : classes
}

const ChatLine = (props) => {
    let { chatWith, chatId, myId, messages, usersLocal } = props;
    let messageWith = messages.filter(message=>(message[Object.keys(message)[0]].sent_from == chatWith && message[Object.keys(message)[0]].sent_to == myId) || (message[Object.keys(message)[0]].sent_from == myId && message[Object.keys(message)[0]].sent_to == chatWith))
    
    return (
        messageWith.map((message, ind)=>(
            <div className={chatPosition(myId, message[Object.keys(message)[0]].sent_from)}>
                <span className="fa-stack mr-3">
                    <i className="fa fa-comment fa-stack-2x text-white-50"></i>
                    <strong className="fa-stack-1x fa-stack-text fa-inverse" data-fa-transform="shrink-1">
                        {myId == message[Object.keys(message)[0]].sent_from ? <p>M<small>e</small></p> : usersLocal[chatWith].name[0].toUpperCase()} {/* first letter of name */}
                    </strong>
                </span>
                <div className="text-white badge badge-secondary p-2">
                    <p className=" mb-2">{message[Object.keys(message)[0]].content}</p>
                    <em className="justify-content-end text-white-50">{message[Object.keys(message)[0]].time}</em>
                </div>
            </div>
        ))
    );
}

export default ChatLine;