import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, TextInput } from 'react-native';


class Form extends Component{
	constructor(props) {
		super(props)
		this.inputValue = ""
  }
	addItem(e){
		// console.log("I am here!------------>")
		e.preventDefault()
		// console.log(this.refs.input.value)
		let value = this.refs.input.value
		this.props.add(value)
		this.refs.input.value = ""
	}
	render(){
		return(
			<View>
					<Text>Add New Item</Text>
					<Text>Item Name</Text>
					<TextInput ref="input" />
					<Button onPress={(e) => this.addItem(e)} title="Add"/>
			</View>
		)
	}
}
export default Form