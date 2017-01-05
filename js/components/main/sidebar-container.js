var React = require('react');
var SidebarItems = require('./sidebar-item-list');

var SidebarList = function(props){
	return(
			<SidebarItems sidebarHeader={props.sidebarHeader} sidebarItems={props.sidebarItems} categories={props.categories} />
		)
};

module.exports = SidebarList;


/*
props for sidebar-item
{props.sidebarItemTitle}
{props.sidebarItemDate}
{props.sidebarItemContent}

props for sidebar-list
{props.sidebarHeader}
{props.sidebarItems} <-- array
*/