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
						<TextInput 
							ref="editName"
						 	// value={this.item}
							onChangeText= {(input) => this.itemValue = input}
						 />
						<Button title="Save" onPress={ () => this.props.editItems(this.index, this.itemValue, false)}/>
						<Button title="Delete" onPress={ () => this.props.deleteItems(this.index)}/>
				</View>
			)
		}
		return(
			<View>
			{items.map((t, i)=> {
				let boundItemClick = this.onItemClick.bind(this, t, i);
				return(
					<View key={i} style={styles.itemContainer}>
						<Text style={{marginTop: 3, marginBottom: 3}}>{t.name}</Text>
						<Button title="Edit" onPress={boundItemClick}/>
						<Button title="Delete" onPress={ () => this.props.deleteItems(i)}/>
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


const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#D6D6D6',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
 }
});