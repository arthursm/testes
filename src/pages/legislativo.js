import React, {Component} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import { createBottomTabNavigator } from "react-navigation";

export default class Legislativo extends Component { 

  render() {
    return (
      <View style={styles.container}>  
      <ScrollView showsVerticalScrollIndicator={false}> 
        <View style={styles.toolbar}>
          <View style={styles.navBar}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Pais")}>
            <Image style={{width: 45, height: 45, zIndex:1, marginTop: 1}} source={require('../images/bandeira3.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Executivo")}>
            <Image style={{width: 45, height: 45}} source={require('../images/casabranca.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Legislativo")}>
            <Image style={{width: 45, height: 45, zIndex:1, marginTop: 3}} source={require('../images/book2.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}>
            <Image style={{width: 35, height: 35, zIndex:1, marginTop: 6}} source={require('../images/globe.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}>
            <Image style={{width: 47, height: 47}} source={require('../images/dinheiro.png')} /> 
          </TouchableOpacity>
            <View style={styles.money}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}> 
            <Text style={styles.dinheiro}> 125 Milhões </Text>
          </TouchableOpacity>
            </View>
          </View>  
            <View style={styles.calendar}> 
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}>
                <Image style={{width: 35, height: 35}} source={require('../images/calendario3.png')} /> 
              </TouchableOpacity> 
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}> 
                <Text style={styles.numeros}> 10.10.10 </Text>
              </TouchableOpacity> 
            </View>
          </View>   
      </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'space-between', 
    flex: 1, 
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: '#10ac84',
    maxHeight: 50, 
    minHeight: 50,
  }, 
  navBar:{
    width: 350, 
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  calendar:{  
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  numeros:{
    paddingTop: 2.5,
    fontSize: 23,
    color: '#344E5D'
  },
  dinheiro:{
    paddingTop: 2.5,
    fontSize: 23,
    zIndex:1, 
    marginTop: 6,
    marginLeft: 5,
    color: '#344E5D'
  },
  money:{
    marginLeft: -20,
  },
  item: {
    alignItems: "center",
    backgroundColor: "#dcda48",
    backgroundColor: "#dcda48",
    flexGrow: 1,
    margin: 4,
    padding: 20,
    flexBasis: 0,
  },
  text: {
    color: "#333333"
  }
});
