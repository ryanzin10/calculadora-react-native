import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = (props) => {
  if(props.v2 ==1){
    return ( 
      <View style={ styles.title }>
	      	<Text style={ styles.text } > { props.valor } </Text>
	    </View>
	);
  } else{
    return ( 
      <View style={ styles.title }>
	      	<Text style={ styles.text2 } > { props.valor } </Text>
	    </View>
	);
  }
}

const styles = StyleSheet.create({

  title: {
    flexDirection: 'row',
    justifyContent: 'center', 
    height: 60,
    margin: 3,
    borderWidth: 3,
    borderColor: 'green',
  },
  text: {
      color:'white',
      fontSize: 36,
      fontWeight: '900',

  },
  text2: {
      color: 'red',
      fontSize: 40,
      justifyContent: 'center', 
      fontWeight: '900',
      fontFamily:'impact',

  }
});
export default Title;