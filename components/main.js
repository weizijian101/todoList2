var React = require("react");
var ReactDOM = require("react-dom");
var TodoItem = require("../components/todoItem.js");
var TodoHeader = require("../components/todoHeader.js");
var Main = React.createClass({

	getInitialState:function() {
			return({
				todos:["吃饭","学习"],
				isAllChecked:false
			})
		},
	handleAddTodo:function(todo){
		var todos = this.state.todos;
		todos.push(todo);
		this.setState({
			todos:todos
		})
	},
	render:function(){
		var todos = this.state.todos;
		var todosDom = todos.map(function(todo,index){
			return <TodoItem cnt={todo} />
		})
		return(
				<div id="main">
					<div id="mainHeader">This is todo list</div>
					<TodoHeader data={this.handleAddTodo} />
					<ul>
						{todosDom}
					</ul>
					<div id="spaceHd" >恭喜没有任务</div>
					<div id="mainFooter">
						<div><input type="checkbox" />全选</div>
						<div id="todosNum">已完成/全部</div>
						<div id="dltAll"><input type="butotn" value="清除全部"/></div>
					</div>
				</div>
			)
	},
});

module.exports = Main;