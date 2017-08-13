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
					<Text style={{textAlign: "center", margin: 5}}>You are editing the {this.item} item.</Text>
					<TextInput 
						ref="editName"
					 	style={styles.textInput}
						onChangeText= {(input) => this.itemValue = input}
						// style={{}}
					 />
					<Button title="Save" onPress={ () => this.props.editItems(this.index, this.itemValue, false)}/>
					<Button title="Delete" onPress={ () => this.props.deleteItems(this.index)}/>
				</View>
			)
		}
		return(
			<View style={styles.itemContainer} >
			{items.map((t, i)=> {
				let boundItemClick = this.onItemClick.bind(this, t, i);
				return(
					<View key={i} style={styles.itemContainer}>
						<Text style={{marginTop: 3, marginBottom: 3, fontWeight: "bold", fontSize: 18}}>{t.name}</Text>
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
    // backgroundColor: '#D6D6D6',
    alignItems: 'center',
    justifyContent: 'center',
 },
 textInput:{
		backgroundColor: "#fff",
		borderColor: "#3A3E4B",
    borderWidth: 1,
    padding: 5,
		marginTop: 5,
		marginLeft: 50,
		marginRight: 50
  }
});