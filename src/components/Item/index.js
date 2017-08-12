import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, TextInput } from 'react-native';


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
				<View>
						<TextInput ref="editName" value={this.item}/>
						<Button title="Save" onClick={ () => this.props.editItems(this.index, this.refs.editName.value, false)}/>
						<Button title="Delete" onClick={ () => this.props.deleteItems()}/>
				</View>
			)
		}
		return(
			<View>
			{items.map((t, i)=> {
				let boundItemClick = this.onItemClick.bind(this, t, i);
				return(
					<View key={i}>
						<Text>{t.name}</Text>
						<Button title="Edit" onClick={boundItemClick}/>
						<Button title="Delete" onClick={ () => this.props.deleteItems(i)}/>
					</View>
				)
			})}
			</View>
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