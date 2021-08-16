import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import Display from './components/Display';
import Keyboard from './components/Keyboard';
import Title from './components/Title';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      display: '0',
      valor: [null, null, null],
      operacao: null,
    };
  }

  onPress(id) {
    
    switch(id) {

      // clear
      case 10:
              this.setState({
                display: '0',
                valor: [null, null, null],
                operacao: null,          
              });
              break;
      // Raiz
      case 11:
              if(this.state.valor[0] != null && this.state.operacao == null) {
                let calc = Math.sqrt(this.state.valor[0]).toFixed(2);
                this.setState({
                  display: calc,
                  valor: [calc, null, aux],
                  operacao: null,          
                });
              }
              break;
      // Porcentagem
      case 12:
              if(this.state.valor[0] != null && this.state.operacao == null) {
                this.setState({ 
                  display: '%',
                  operacao: 'per', 
                });
              }
              break;
      // Divisão
      case 13:
              if(this.state.valor[0] != null && this.state.operacao == null) {
                this.setState({
                  display: '÷', 
                  operacao: 'div',
                });
              }
              break;
      // Multiplicação
      case 14:
              this.setState({ 
                display: 'x', 
                operacao: 'mul', 
              });
              break;
      // Subtração
      case 15:
              this.setState({ 
                display: '-', 
                operacao: 'sub',
              });
              break;
      // Adição
      case 16:
              this.setState({ 
                display: '+', 
                operacao: 'adi',
              });
              break;
      // Igual - Resultado
      case 17:
              if( this.state.valor[0] != null && 
                  this.state.operacao != null &&
                  this.state.valor[1] != null) {

                  let calc;
                  if(this.state.operacao == 'adi') { 
                    calc = (this.state.valor[0] + this.state.valor[1]).toFixed(2);
                  }
                  else if(this.state.operacao == 'sub'){
                    calc = (this.state.valor[0] - this.state.valor[1]).toFixed(2);
                  }
                  else if(this.state.operacao == 'mul') {
                    calc = (this.state.valor[0] * this.state.valor[1]).toFixed(2);
                  }
                  else if(this.state.operacao == 'div') {
                    calc = (this.state.valor[0] / this.state.valor[1]).toFixed(2);
                  }

                  this.setState({
                    display: calc,
                    valor: [calc, null, calc],
                    operacao: null,
                  });
              }
              else {
                this.setState({
                  display: '0',
                  valor: [null, null, null],
                  operacao: null,          
                });
              }
              break;
      // Número
      default:
              let aux = this.state.valor;
              let val;

              // Primeiro Valor
              if(this.state.operacao == null) {
                val = (aux[0] * 10) + id;
                aux[0] = val;
              }
              // Segundo Valor
              else {
                val = (aux[1] * 10) + id;
                aux[1] = id;
              }

              this.setState({
                display: val,
                valor: aux,
              });
              break;
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Title valor ='CALCULADORA' v2='1'/>
        <Display valor={ this.state.display } />
        <Keyboard onPress={ (val) => this.onPress(val) } />
        <Title valor = 'CLEBER 514'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    borderWidth: 3,
    borderColor: '#FFF',
  }
  
});