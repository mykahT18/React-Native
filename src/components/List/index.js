import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

import Item from '../Item'

class List extends Component{
	render(){
		return(
			<section>
				<h1>My Shopping List</h1>
				<ul>
					<Item 
					todos={this.props.todos} 
					deleteItems={this.props.deleteItems} 
					editItems={this.props.editItems}
					editingItem={this.props.editingItem}
					/>
				</ul>
			</section>
		)
	}
}
export default List;