import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import { createBottomTabNavigator } from "react-navigation";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.toolbar}>  
          <Icon name="crown" size={30} color="#FF0000" onPress={() => this.props.navigation.navigate("Ministerios")}/>          
          <Icon name="landmark" size={30}/>  
          <Icon name="dollar-sign" size={30}/>  
          <Icon name="city" size={30}/> 
          <Icon name="calendar-alt" size={30}/>
          <Icon name="crosshairs" size={30}/> 
          <Icon name="handshake" size={30}/>
          <Icon name="handshake" size={30}/>
        </View>
      </View>
    );
  }
} 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  toolbar: {
    color: '#FF00FF',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: '#CCC',
    maxHeight: 50
  }, 
});
