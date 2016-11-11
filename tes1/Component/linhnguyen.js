import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

 export default class abc extends Component{
      render(){
          return(
            <View >
                <Text style={styles.textClient}> {this.props.name} -{this.props.birth}</Text>
            </View>
          );

      }

  }

 abc.propType={
  	name : React.PropTypes.string,
  	birth : React.PropTypes.number,
  }

  const styles = StyleSheet.create({
  textClient:{
     fontSize : 30
   	 }
 });
