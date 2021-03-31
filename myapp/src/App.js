import React, { Component } from 'react';
import AllChats from './components/allchatscomp/allchatsComponent'
import MyChatsWith from './components/currentchatscomp/currentChatComponent'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/login'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showLogin: true,
            showAllChats: false,
            showMyChatsWith: false,
            usersLocal: {},
            messages: {},
            chatWith: null,
            chatId: 0,
            myId: '',
            idInpt: '',
            passwordInpt: '',
            typeChat: '',
         }
    }

    idForm = e=> {
        this.setState({ idInpt: e.target.value });
    };

    passwordForm = e=> {
        this.setState({ passwordInpt: e.target.value });
    };

    componentDidMount() {
        this.setState({usersLocal: JSON.parse(localStorage.users), messages: JSON.parse(localStorage.messages)});
    };

    submitButton = ()=> {
        const {usersLocal, passwordInpt, idInpt} = this.state
        let user_id = usersLocal[Number(idInpt)];
        if (user_id && (passwordInpt == user_id.password)) {
            this.setState({showLogin: false, showAllChats: true, showMyChatsWith: true, myId: idInpt});
        };
    };

    clickingOnDm = (chats, ind)=> {
        this.userId = Object.keys(chats)
        this.setState({chatWith: this.userId[0]})
    };

    chatTyping = e=> {
        this.setState({typeChat: e.target.value})
    }

    sendChat = val=> {
        console.log(this.state.typeChat)
        let messageUpdate = {}
        messageUpdate[this.state.messages.length+1] = {sent_from: this.state.myId, sent_to: val, time: '10/10/1999', content: this.state.typeChat, checked: 1}
        let messages = [...this.state.messages, messageUpdate]
        localStorage.messages = JSON.stringify(messages)
        this.setState({messages: messages, typeChat: ''})
    }

    render() {
        let {showLogin, showAllChats, showMyChatsWith} = this.state;
        return (
            <React.Fragment>
                {showLogin && <Login onSubmit={this.submitButton} passwordForm={this.passwordForm} idForm={this.idForm} idInpt={this.state.idInpt} passwordInpt={this.state.passwordInpt} />}
                <div className="row pt-0 pb-0 bg-dark">
                    <div className="col-4 border border-secondary border-top-0 border-left-0 border-bottom-0">
                        {showAllChats && <AllChats allInfo={this.state} clickingOnDm={this.clickingOnDm} />}
                    </div>
                    <div className="col-8 p-0">
                        {showMyChatsWith && <MyChatsWith {...this.state} chatTyping={this.chatTyping} sendChat={this.sendChat} />}
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default App;