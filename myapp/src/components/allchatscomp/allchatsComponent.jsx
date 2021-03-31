import React, { Component } from 'react';
import NavBar from './allChatsNav'
import SearchBar from './searchBarComponent'
import ProfilePics from './profilePics'
import DMs from './allDms'

class AllChats extends Component {
    constructor(props){
        super(props);
        this.myChats = [];
    }

    render() { 
        let {messages, usersLocal, myId} = this.props.allInfo;
        this.myFiltered = [];
        this.myReFiltered = [];
        this.ind = 1;
        this.toSave = {};
        this.usersDm = [];
        this.myChats = messages.filter((message, ind)=>(message[ind+1].sent_from == myId || message[ind+1].sent_to == myId) && !this.myChats.includes(message))
        this.myFiltered = this.myChats.map((chat, ind)=>{return chat[ind+1].sent_from == myId ? chat[ind+1].sent_to : chat[ind+1].sent_from})
        for (let i in this.myFiltered) {
            if (this.myReFiltered.includes(this.myFiltered[i])) {
                continue
            }
            this.myReFiltered.push(this.myFiltered[i])
        }
        for (let i in this.myReFiltered) {
            this.toSave[this.myReFiltered[i]] = usersLocal[this.myReFiltered[i]]
            this.usersDm.push(this.toSave)
            this.toSave = {}
        }
        
        return ( 
            <div className="bg-dark" style={{height: '100vh'}}>
                <NavBar showOptions={true} colSize={4}>
                    <div className="col-12 text-white-50 p-0 m-4 mx-auto d-flex justify-content-between">
                        <i className="fa fa-envelope fa-lg mt-"></i>
                        <i className="fa fa-comments fa-lg mt-"></i>
                        <i className="fa fa-ellipsis-v fa-lg mt-"></i>
                    </div>
                </NavBar>
                <SearchBar />
                {this.usersDm.map((userInfo, ind)=><DMs key={ind+1} onClick={()=>this.props.clickingOnDm(userInfo, this.myReFiltered[ind])} userInfo={userInfo} contactUser={userInfo[this.myReFiltered[ind]].name} id={this.myReFiltered[ind]} messages={messages} />)}
            </div>
         );
    }
}
 
export default AllChats;