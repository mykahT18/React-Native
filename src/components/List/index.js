import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, ScrollView } from 'react-native';


import Item from '../Item'

class List extends Component{
	render(){
		return(
			<View>
				<ScrollView>
				<Text style={{marginTop: 10, textAlign: "center", fontSize: 20}}>My Shopping List</Text>
				<View>
					<Item 
						todos={this.props.todos} 
						deleteItems={this.props.deleteItems} 
						editItems={this.props.editItems}
						editingItem={this.props.editingItem}
					/>
				</View>
				</ScrollView>
			</View>
		)
	}
}
export default List;