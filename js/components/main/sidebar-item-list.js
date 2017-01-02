var React = require('react');
var router = require('react-router');
var Link = router.Link;
var SidebarItem = require('./sidebar-item');


var SidebarList = function(props){
	var items = props.sidebarItems; //<-- array
	var numberOfItemsToDisplay = items.length<10 ? items.length : 10;
	var sidebarList = [];
	for (var item = 0; item < numberOfItemsToDisplay; item++) {
		sidebarList.push(
			<div key={item}>
				<SidebarItem sidebarItemTitle={items[item].blogPost.title} sidebarItemDate={items[item].blogPost.month + " " + items[item].blogPost.date} blogId={items[item]._id}/>
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

					 sidebarItemContent={items[item].content}
					


props for sidebar-item
{props.sidebarItemTitle}
{props.sidebarItemDate}
{props.sidebarItemContent}
*/