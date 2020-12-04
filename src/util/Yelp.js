const apiKey = 'MuMTLFERDTI2ZfQ0uxO_9Nzs-0odTI2fBCbfO-q3dVMKlhm6EwvW9ioF__XuBfFPDlqcPhxveJqlHwFVWqy1k6RwZYENga588RM6ZlELsAR1oeWx9tOi4mu2l7p9XnYx';
const url = 'https://api.yelp.com/v3/businesses/search?';
const cors_url = 'https://cors-anywhere.herokuapp.com/';

const Yelp = {
	search(term, location, sortBy) {
	const urlToFetch = `${cors_url}${url}term=${term}&location=${location}&sort_by=${sortBy}`;
	return fetch(urlToFetch, {
		headers: {
			Authorization: `Bearer ${apiKey}`
			}}).then((response) => {
				console.log(response);
				return response.json();
			}).then((jsonResponse) => {
				console.log(jsonResponse);
				if(jsonResponse.businesses){
					return jsonResponse.businesses.map((business) => {
						return {
							id: business.id,
							imageSrc: business.image_url,
							name: business.name,
							address: business.location.address1,
							city: business.location.city,
							phone: business.display_phone,
              url: business.url,
							zipCode: business.location.zip_code,
							category: business.categories.length === 1 ? business.categories[0].title : business.categories[1].title,
							rating: business.rating,
							reviewCount: business.review_count							
						}
					});
				}
			});	
		}
};



export default Yelp;
