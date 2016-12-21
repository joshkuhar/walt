var React = require('react');
var router = require('react-router');
var Link = router.Link;
var SidebarItem = require('./sidebar-item');


var SidebarList = function(props){
	var items = props.sidebarItems;
	var sidebarList = [];
	for (var item in items) {
		sidebarList.push(
			<div key={item}>
				<SidebarItem sidebarItemTitle={items[item].title}
					sidebarItemDate={items[item].date}
					sidebarItemContent={items[item].content} />
			</div>
		)
	}
	
	return (
		<div className="sidebar">
			<h3 className="sidebar-header">{props.sidebarHeader}</h3>
			<div className="sidebar-items">{sidebarList}</div>
		</div>

		)
}

module.exports = SidebarList;





/*
for sidebar-item
{props.sidebarItemTitle}
{props.sidebarItemDate}
{props.sidebarItemContent}

for sidebar-list
{props.sidebarHeader}
{props.sidebarItems} <-- array

*/