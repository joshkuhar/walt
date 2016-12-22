var React = require('react');
var router = require('react-router');
var Link = router.Link;

var SidebarItem = function(props) {
	var trimmedString = props.sidebarItemContent.substring(0, 100) + "...";
	return (
			<div className="sidebar-item">
				<div className="sidebar-item-title">{props.sidebarItemTitle}</div>
				<div className="sidebar-item-date">{props.sidebarItemDate}</div>
				<div className="sidebar-item-content">{trimmedString}</div>
			</div>
		)
};

module.exports = SidebarItem;
