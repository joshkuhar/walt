var React = require('react');
var ReactDOM = require('react-dom');
var BlogToEditList = require('./edit-list');
var Data = require('../../mock-data');

var EditList = function(props){
	var amountToDisplay = 0;
	if (Data.items.length > 10) {
		amountToDisplay = 10;
	} else {
		amountToDisplay = Data.items.length;
	}
	return (
		<div className="blog-to-edit-list-container">
			<BlogToEditList blogsToEdit={Data.items} numberOfBlogsToDisplay={amountToDisplay}/>
		</div>							
		
		)
};

module.exports = EditList;	