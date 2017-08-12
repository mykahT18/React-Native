import React, { Component } from 'react'
import { 
	AppRegistry, 
	StyleSheet, 
	Text, 
	View, 
	Button, 
	TextInput,
	KeyboardAvoidingView  } from 'react-native';


class Form extends Component{
	constructor(props) {
		super(props)
		// this.inputValue = ""
  }
	addItem(e){
		console.log("I am here!------------>")
		e.preventDefault()
		console.log(this.itemValue)
		let value = this.itemValue
		this.props.add(value)
		this.itemValue = ""
	}
	render(){
		return(
			<View>
				<KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
						<Text>Add New Item</Text>
						<Text>Item Name</Text>
						<TextInput 
							style={styles.textInput} 
						 	onChangeText= {(input) => this.itemValue = input}
						 	placeholder="Shopping Item" />
						<Button onPress={(e) => this.addItem(e)} title="Add"/>
				</KeyboardAvoidingView>
			</View>
		)
	}
}
export default Form
const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#D6D6D6',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea:{
		marginTop: 20,
		marginBottom: 10,
		fontWeight: "bold",
		color: "#E1F5E8"
  },
  textInput:{
		backgroundColor: "#fff",
		width: 300
  }
});