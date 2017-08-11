import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

import Item from '../Item'

class List extends Component{
	render(){
		return(
			<View>
				<Text>My Shopping List</Text>
				<View>
					<Item 
					todos={this.props.todos} 
					deleteItems={this.props.deleteItems} 
					editItems={this.props.editItems}
					editingItem={this.props.editingItem}
					/>
				</View>
			</View>
		)
	}
}
export default List;