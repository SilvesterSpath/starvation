import React from 'react';
import './Business.css';

class Business extends React.Component {

	render() {
		return (
					<div className="Business">
						<div className="image-container">
							<img src={this.props.business.imageSrc} alt=''/>
						</div>
						<h2>{this.props.business.name}</h2>
						<div className="Business-information">
							<div className="Business-address">
								<p>{this.props.business.address}</p>
								<p>{this.props.business.city}, {this.props.business.zipCode}</p>
                <a href={this.props.business.url} target="_blank" rel="noopener noreferrer">Click for more!</a>
							</div>
							<div className="Business-reviews">
								<h3>{this.props.business.category}</h3>
								<h3 className="rating">{this.props.business.rating} stars</h3>
								<p>{this.props.business.reviewCount} reviews</p>
							</div>
						</div>
					</div>
				)
	}
};

export default Business;