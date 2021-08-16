import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Display = (props) => {
	return ( 
		<View style={ styles.display }>
	      	<Text style={ styles.text } > { props.valor } </Text>
	    </View>
	);
}

const styles = StyleSheet.create({
	display: {
	    flexDirection: 'row',
	    justifyContent: 'flex-end', 
	    alignItems: 'center',
	    height: 80,
	    paddingRight: 15,
	    margin: 5,
	    marginTop: 15,
	    borderRadius: 180,
	    borderColor: 'black',
	    backgroundColor: '#B8A58F',
	},
	text: {
	    color: 'white',
	    fontSize: 36,
	    fontWeight: '900',
  	},
});

export default Display;