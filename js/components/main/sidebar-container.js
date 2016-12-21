var React = require('react');
var SidebarItems = require('./sidebar-item-list');
var Data = require('../../mock-data');

var SidebarList = function(props){
	console.log(Data.items);
	return(
			<SidebarItems sidebarHeader="Hermia" sidebarItems={Data.items} />
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