import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';


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
			<section className="card">
				<form id="myForm" action="">
					<h4>Add New Item</h4>
					<label className="text-left">Item Name</label>
					<input type="text" ref="input" placeholder="grocery Item"/>
					<button type="submit" className="button expanded" id="custom-btn" onClick={(e) => this.addItem(e)}>Add</button>
				</form>
			</section>
		)
	}
}
export default Form