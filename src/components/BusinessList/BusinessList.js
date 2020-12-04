import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
	render(){
		return (<div className="BusinessList">
							{
								this.props.businesses.map((i) => {
									return <Business business={i} key={i.id} />;
								})
							}
						</div>
					);
	}		
};

export default BusinessList;

