import React, { Component } from 'react';

const TypeChat = (props) => {
    return ( 
        <div style={{position: 'fixed', bottom: '0', width: '70%'}}>
            <div className="input-group mb-0 pl-2 pr-5 position-fixed-bottom">
                <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control bg-secondary text-white" onChange={props.chatTyping} placeholder="Username" value={props.typeChat} />
                <div className="input-group-prepend dms">
                    <span className="fa fa-location-arrow fa-2x text-secondary px-2 bg-white dms" data-fa-transform="rotate-45" onClick={()=>props.sendChat(props.chatWith)} style={{borderRadius: '0 5px 5px 0px', cursor: 'pointer'}}></span>
                </div>
            </div>
        </div>
     );
}
 
export default TypeChat;