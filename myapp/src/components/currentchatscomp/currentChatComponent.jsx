import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../allchatscomp/allChatsNav';
import ChatBoundary from './chatsNotBeyond';
import TypeChat from './chat-type-bar'

class MyChatsWith extends Component {
    state = {

    }

    render() {
        let { chatWith, chatId, myId, messages, usersLocal, chatTyping, sendChat } = this.props;
        if (chatWith) {
            const friend = usersLocal[chatWith]
            let allMessageWithFriend = messages.filter((message, i) => (message[i + 1].sent_from == chatWith && (message[i + 1].sent_to == myId)));
            return (
                <React.Fragment>
                    <NavBar showOptions={true} colSize={11}>
                        <div className="">
                            <h5 className="text-white mx-auto mt-1 mb-0">{friend.name.toUpperCase()}</h5>
                            <p className="text-white-50 mx-auto mb-0">{friend.online == 1 ? 'online' : 'offline'}</p>
                        </div>
                    </NavBar>
                    <ChatBoundary {...this.props} />
                    <TypeChat inputHandler={chatTyping} sendChat={sendChat} {...this.props} />
                </React.Fragment>

            );
        } else {
            return (
                    <h1>Click on a message to show chats</h1>
            )
        };
    }
}

export default MyChatsWith;