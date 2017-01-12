var React = require("react");
var ReactDOM = require("react-dom");
var TodoItem = React.createClass({
	render:function(){
		return(
			<div className="todoItem">
				<div className="itemCk"><input type="checkbox" /></div>
				<div className="itemCnt">{this.props.cnt}</div>
				<div className="delBtn"><input type="button" value="删除"/></div>
			</div>
			)
	}
})

module.exports = TodoItem;