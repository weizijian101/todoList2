var React = require("react");
var ReactDOM = require("react-dom");
var TodoHeader = React.createClass({
	getInitialState:function(){
			return({
				todo:''
			})
		},
	handleChange:function(e){
		this.setState({
			todo:e.target.value
		})
		//console.log(this.state.todo);
	},
	handleAdd:function(e){
		e.preventDefault();
		if(!this.state.todo)
			return;
		this.props.data(this.state.todo);
		this.setState({
			todo:''
		});
		//console.log("state:"+this.state.todo);
	},
	render:function(){		
		return(
			<div id="todoHeader">
						<input type="text" placeholder="请输入任务" onChange={this.handleChange} value={this.state.todo}/>
						<input type="button" value="添加" onClick={this.handleAdd}/>
					</div>
			)
	}
})

module.exports = TodoHeader;