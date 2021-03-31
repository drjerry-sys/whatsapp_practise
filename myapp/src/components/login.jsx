import React, { Component } from 'react';
import propTypes from 'prop-types';


const Login = (props) => {
    let {onSubmit, idForm, passwordForm, passwordInpt, idInpt} = props;
    return ( 
        <React.Fragment>
            <div className="col bg-dark mb-2 d-flex p-5">
                <div className="form-inline d-flex">
                    <label htmlFor="id" className="text-white ml-2">Enter-ID:</label>
                    <input type="number" onChange={idForm} className="form-control" value={idInpt} />
                    <label htmlFor="pwd" className="text-white ml-2">Enter Password:</label>
                    <input type="password" onChange={passwordForm} className="form-control" value={passwordInpt} />
                    <button onClick={onSubmit} className="btn btn-primary" con>Submit</button>
                </div>
            </div>
        </React.Fragment>
    );
}

Login.propTypes = {
    onSubmit: propTypes.func,
    idForm: propTypes.func,
    passwordForm: propTypes.func,
    passwordInpt: propTypes.string,
    idInpt: propTypes.string,
};
 
export default Login;