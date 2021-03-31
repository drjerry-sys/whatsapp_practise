import React from 'react';

const SearchBar = (props) => {
    return ( 
        <React.Fragment>
            <form>
                <div className="input-group px-2 my-2 justify-content-center mx-auto input-group-sm" style={{borderRadius: '12px'}}>
                    <div className="input-group-prepend">
                        <span className="input-group-text fa fa-search" style={{backgroundColor: "grey", border: '0'}}></span>
                    </div>
                    <input type="text" className="form-control" color="white" style={{backgroundColor: "grey", border: '0'}}/>
                </div>
            </form>
        </React.Fragment>
     );
}
 
export default SearchBar;