import React, { Component } from 'react'
import { 
	AppRegistry, 
	StyleSheet, 
	Text, 
	View, 
	TextInput,
	KeyboardAvoidingView  } from 'react-native';
import { Button } from 'react-native-elements';


class Form extends Component{
	addItem(e){
		console.log("I am here!------------>")
		e.preventDefault()
		console.log(this.itemValue)
		let value = this.itemValue
		this.props.add(value)
		this.refs.itemName.setNativeProps({text: ''})
		console.log("After adding!!!! ", this.itemValue)
	}
	render(){
		return(
			<View>
				<KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
						<Text style={{fontWeight: "bold", margin: 5, fontSize: 20}}>Add New Item</Text>
						<Text style={{margin: 5}}>Item Name</Text>
						<TextInput 
							ref="itemName"
							style={styles.textInput} 
						 	onChangeText= {(input) => this.itemValue = input}
						 	placeholder="Shopping Item" />
						<Button raised buttonStyle={{backgroundColor: '#26A69A',width:300, margin: 8}} onPress={(e) => this.addItem(e)} title="Add"/>
				</KeyboardAvoidingView>
			</View>
		)
	}
}
export default Form
const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FEFEFE',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#3A3E4B",
    borderWidth: StyleSheet.hairlineWidth,
    height: 200
  },
  textInput:{
		backgroundColor: "#fff",
		width: 300,
		borderColor: "#3A3E4B",
    borderWidth: 1,
    padding: 5
  }
});