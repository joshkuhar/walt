var React = require('react');
var router = require('react-router');
var Link = router.Link;
var SidebarItem = require('./sidebar-item');

var SidebarList = function(props){
	var items = props.sidebarItems; //<-- array
	console.log(items);
	var categories = props.categories; //<-- array
	var numberOfItemsToDisplay = items.length<5 ? items.length : 5;
	var sidebarList = [];
	var startingIndex = props.startingIndex;
	console.log(startingIndex, numberOfItemsToDisplay);
	for (var item = startingIndex; item < numberOfItemsToDisplay+startingIndex; item++) {
	
		var sidebarItemCategory = item;
		for(var category in categories){

			if(items[item].blogPost.categoryId === categories[category]._id) {
				sidebarItemCategory = categories[category].category;
			}
		}	
		sidebarList.push(
			<div key={item}>
				<SidebarItem 
					sidebarItemTitle={items[item].blogPost.title} 
					sidebarItemDate={items[item].blogPost.month + " " + items[item].blogPost.date} 
					blogId={items[item]._id} 
					sidebarItemCategory={sidebarItemCategory}
				/>
			</div>
		)
	}
	return (
		<div className="sidebar">
			<h3 className="sidebar-header">{props.sidebarHeader}</h3>
			<div className="sidebar-item-list">{sidebarList}</div>
		</div>

		)
};

module.exports = SidebarList;


/*
props for sidebar-item
{props.sidebarItemTitle}
{props.sidebarItemDate}
{props.sidebarItemContent}
*/