import React, { Component } from 'react'
import Repository from './Repository';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.css';

class RepositorySearchList extends Component {
    state = {
        searchQuery: "",
        items: [],
        pageNo: 1,
    }
    onChange = (e) => {
        console.log("change", e.target.value)
        this.setState({
            searchQuery: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.getPageData(this.state.searchQuery, this.state.pageNo)

    }
    getPageData = (searchQuery, pageNum) => {
        const url = `https://api.github.com/search/repositories?q=language:${searchQuery}&per_page=20&page=${pageNum}&sort=forks&order=desc`
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    items: res.items,
                    pageNo: pageNum
                    ,
                })
            });
    }
    componentDidMount() {
        this.getPageData(this.state.searchQuery, this.state.pageNo)

    }
    render() {
        return (
            (this.state.items) ?
                <div className="container ">
                    <SearchBar onSubmit={this.onSubmit} onChange={this.onChange}></SearchBar>
                    <ul className="list-inline">
                        {this.state.items.map(repo => <li className="" key={repo.id}><Repository repoVal={repo} /></li>)}
                    </ul>
                    <div className="d-flex justify-content-center"><span><button className="btn btn-success" onClick={() => this.getPageData(this.state.searchQuery, this.state.pageNo - 1)} disabled={this.state.pageNo < 2}>Prev Page</button> </span>
                        <span><button className="btn btn-link ml-3 mr-3">Page {this.state.pageNo}</button></span>
                        <span><button className="btn btn-success" onClick={() => this.getPageData(this.state.searchQuery, this.state.pageNo + 1)}>Next Page</button></span></div>
                </div >
                : <div className="spinner-border" role="status">
                    <span className="sr-only d-flex justify-content-center ">Loading...</span>
                </div>
        )
    }
}
export default RepositorySearchList
