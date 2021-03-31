import React from 'react';

const truncateChar = (id, messages, messagePart)=> {
    let myMessages =[]
    for (let i=0; i<messages.length; i++) {
        if (messages[i][i+1].sent_from == id) {
            myMessages.push([messages[i], i+1])
        }
    }

    if (myMessages.length > 0) {
        let message = myMessages.slice(-1)
        let userLast;
        if (messagePart == 'm') {
            userLast = message[0][0][message[0][1]].content
        }else{
            userLast = message[0][0][message[0][1]].time
        }
        return userLast.length > 30 ? userLast.slice(0, 30)+'...' : userLast
    }

    // return myMessages.slice(-1)[0][myMessages.length].content
};

const Dm_Update = (props) => {
    let {userId, userInfo, contactUser, messages} = props;
    // let mess = userInfo[`${userId}`];
    return ( 
        <div className="p-0 m-0">
            <div style={{height: '25px'}} className="col-12 d-flex text-white justify-content-between">
                <p style={{ fontSize: '14px', }} className="justify-content-start">{contactUser}</p>
                <p style={{ fontSize: '11px', }} className="justify-content-end">{truncateChar(userId, messages, 't')}</p>
            </div>
            <div style={{height: '25px'}} className="col-12 d-flex justify-content-between">
                <p style={{fontSize: '10px',}} className="text-white">{truncateChar(userId, messages, 'm')}</p>
                <span className="badge badge-pill badge-secondary" style={{height: '15px'}}>45</span>
            </div>
        </div>
        );
    }
 
export default Dm_Update;