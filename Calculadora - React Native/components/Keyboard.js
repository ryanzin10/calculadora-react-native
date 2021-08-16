import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class Keyboard extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<View> 
				<View style={ [styles.title, styles.line] }>
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(10) } }
							title='CC'
							color="green"
						/>
					</View>        
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(11) } }
							title='√'
							color="#143414"
						/>
					</View>
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(12) } }
							title='%'
							color="#143414"
						/>
					</View>
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(13) } }
							title='÷'
							color="#143414"
						/>
					</View>        
				</View>
				<View style={ [styles.title, styles.line, {marginTop: 0}] }>
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(7) } }
							title='7'
							color="#143414"
						/>
					</View>        
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(8) } }
							title='8'
							color="#143414"
						/>
					</View>
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(9) } }
							title='9'
							color="#143414"
						/>
					</View>
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(14) } }
							title='X'
							color="#143414"
						/>
					</View>        
				</View>
				<View style={ [styles.title, styles.line, {marginTop: 0}] }>
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(4) } }
							title='4'
							color="#143414"
						/>
					</View>        
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(5) } }
							title='5'
							color="#143414"
						/>
					</View>
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(6) } }
							title='6'
							color="#143414"
						/>
					</View>
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(15) } }
							title='-'
							color="#143414"
						/>
					</View>        
				</View>
				<View style={ [styles.title, styles.line, {marginTop: 0}] }>
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(1) } }
							title='1'
							color="#143414"
						/>
					</View>        
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(2) } }
							title='2'
							color="#143414"
						/>
					</View>
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(3) } }
							title='3'
							color="#143414"
						/>
					</View>
					<View style={ styles.button }>
						<Button 
							onPress={ () => { this.props.onPress(16) } }
							title='+'
							color="#143414"
						/>
					</View>        
				</View>
				<View style={ [styles.title, styles.line, {marginTop: 0}] }>
					<View style={ [styles.button, {flex: 1}] }>
						<Button 
							onPress={ () => { this.props.onPress(0) } }
							title='0'
							color="#143414"
						/>
					</View>        
						<View style={ [styles.button, , {flex: 3}] }>
						<Button 
							onPress={ () => { this.props.onPress(17) } }
							title='='
							color="green"
						/>
					</View>
				</View>
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
		borderColor: 'white',
	},
	line: {
		height: 48,
		margin: 5,
		marginTop: 15,
		borderColor: 'black',
	},
	button: {
		flex: 1,
		margin: 3,
	},
});

export default Keyboard;