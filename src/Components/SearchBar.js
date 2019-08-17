import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
function SearchBar(props) {
    return (
        <form className="row d-flex justify-content ml-2 mb-3" onSubmit={props.onSubmit}>
            <input className="col-md-9 mr-3 text-center" placeholder="search repositories" onChange={props.onChange}></input>
            <button className="col-md-2 btn btn-warning btn-sm" onClick={props.onSubmit}>Search</button>
        </form>
    )
}
export default SearchBar