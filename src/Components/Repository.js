import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Repository(props) {
    return (
        <div className="container card mb-2">
            <div className="row card-header">
                <div className="col-md-1 border border-dark rounded-circle  bg-white">
                    <img className="mt-3" width="50px" height="50px" alt="!" src={props.repoVal.owner.avatar_url}></img>
                </div>
                <div className="col-md-6 ml-5">
                    <ul className="list-inline">
                        <li ><strong className="mr-3">Repository Name -</strong>{props.repoVal.name}</li>
                        <li ><strong className="mr-3">Owner -</strong>{props.repoVal.forks_count}</li>
                        <li ><strong className="mr-3">Fork count -</strong>{props.repoVal.owner.login}</li>
                        <li ><strong className="mr-3">Stars count -</strong>{props.repoVal.stargazers_count}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Repository