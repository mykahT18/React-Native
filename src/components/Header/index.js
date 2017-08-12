import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';


class Header extends Component{
	render(){
		return(
			<View>
	  		<View style={styles.header}>
		    	<Text style={styles.textArea}>Shopping</Text>
  			</View>
			</View>
		)
	}
}
export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#26A69A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea:{
		marginTop: 20,
		marginBottom: 10,
		fontWeight: "bold",
		color: "#E1F5E8"
  }
});
