import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			term: 'pizza',
			location: 'paris',
			sortBy: 'best_match'			
		};
		
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);

		this.sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count'
		};		
	}
	
	getSortByClass = (sortByOption) => {
		if(this.state.sortBy === sortByOption){
			return 'active';
		} else {
			return '';
		}
	}
	
	handleSortByChange = (sortByOption) => {
		this.setState({
			sortBy: sortByOption
		});
	}
	
	handleTermChange = (event) =>{
		this.setState({
			term: event.target.value
		});
	}
	
	handleLocationChange = (event) => {
		this.setState({
			location: event.target.value
		});
	}
	
	handleSearch = (event) => {
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
		event.preventDefault();
	}
	
	renderSortByOptions = () => {
		return Object.keys(this.sortByOptions).map((i)=>{
			let sortByOptionValue = this.sortByOptions[i];
			return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{i}</li>
		});
	}
	
	render(){
		return (

			<div className="SearchBar">
						<div className="background">
				<div className="SearchBar-sort-options">
					<ul>
						<this.renderSortByOptions/>
					</ul>
				</div>
				<div className="SearchBar-fields">
					<input placeholder="Search for Food (pizza, sushi...)" onChange={this.handleTermChange} />
					<input placeholder="Where? (London, Paris...)" onChange={this.handleLocationChange} />
				</div>
				<div className="SearchBar-submit">
					<button onClick={this.handleSearch}>Let's Go</button>
				</div>
			</div>
			</div>
		);
	}
}

export default SearchBar;