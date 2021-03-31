import React, { Component } from 'react';
import ProfilePics from './profilePics'
import Dm_Update from './dm-single'

class DMs extends Component {
    state = { 
        allChats: this.props
     }

    render() { 
        let {userInfo, id, contactUser, onClick, messages} = this.state.allChats;
        return ( 
            <div onClick={onClick} className="row dms py-0 my-0">
                <div className="container m-0 d-flex ">
                    <div className="col-2 p-0">
                        <ProfilePics />
                    </div>
                    <div className="col border border-secondary border-bottom-0  border-left-0 border-right-0 p-0">
                        <Dm_Update userInfo={userInfo} messages={messages} userId={id} contactUser={contactUser} />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default DMs;