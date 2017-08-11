import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';


class Item extends Component {
	constructor(props){
		super(props)
		this.index;
		this.item;
	}
	render(){
		let items = this.props.todos.todos
		if(this.props.todos.isEditing){
		return(
				<div>
					<li>
						<input type="text" placeholder={this.item} ref="editName" defaultValue={this.item}/>
						<button className="button li-btn" onClick={ () => this.props.editItems(this.index, this.refs.editName.value, false)}>Save</button>
						<button className="button li-btn" onClick={ () => this.props.deleteItems()}>Delete</button>
					</li>
				</div>
			)
		}
		return(
			<div>
			{items.map((t, i)=> {
				let boundItemClick = this.onItemClick.bind(this, t, i);
				return(
					<li key={i}>
						{t.name} 
						<button className="button li-btn" onClick={boundItemClick}>Edit</button>
						<button className="button li-btn" onClick={ () => this.props.deleteItems(i)}>Delete</button>
					</li>
				)
			})}
			</div>
		)
	}
	onItemClick(item, i){
		console.log(item, i)
		this.index = i;
		this.item = item.name
		this.props.editingItem(true)
	}

}
export default Item