import React, { Component } from 'react';
import ProfilePics from './profilePics'
import propTypes from 'prop-types'

const NavBar = (props) => {
    let {showOptions, colSize} = props;
    let col_size = `col-${colSize}`
    return ( 
        <React.Fragment>
            <div className="d-flex border border-secondary border-top-0 border-left-0 border-right-0">
                <div className="col p-0">
                    <ProfilePics />
                </div>
                <div className={col_size}>
                    {showOptions && props.children}
                </div>
            </div>
        </React.Fragment>
     );
}

NavBar.defaultProps = {
    showOptions: false,
    colSize: 11,
}
 
NavBar.propTypes = {
    showOptions: propTypes.bool,
    colSize: propTypes.number,
};

export default NavBar;