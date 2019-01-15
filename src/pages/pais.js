import React, {Component} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import { createBottomTabNavigator } from "react-navigation";

export default class Pais extends Component {
state = {
  data: [
    { id: "00", name: "Relâmpagoaa ", src: require('../images/wheat.png') },
    { id: "01", name: "Agente aTom ", src: require('../images/mine.png') },
    { id: "03", name: "Cruz Ramirez", src: require('../images/fabrica.png') },
    { id: "03", name: "Cruz Ramirez", src: require('../images/oil.png') },
    { id: "03", name: "Cruz Ramirez", src: require('../images/tower.png') },
    { id: "03", name: "Cruz Ramirez", src: require('../images/road.png') },
    { id: "02", name: "Doc Hudsaaon", src: require('../images/skyline.png') },
    { id: "03", name: "Cruz Ramirez", src: require('../images/chart.png') },
    { id: "03", name: "Cruz Ramirez", src: require('../images/tank.png') },
    { id: "03", name: "Cruz Ramirez", src: require('../images/warehouse.png') },
    { id: "03", name: "Cruz Ramirez", src: require('../images/church.png') },
    { id: "03", name: "Cruz Ramirez", src: require('../images/stadium.png') },
    { id: "03", name: "Cruz Ramirez", src: require('../images/landmark.png') },
    { id: "03", name: "Cruz Ramirez", src: require('../images/ballot.png') },
    { id: "03", name: "Cruz Ramirez", src: require('../images/elections.png') },
  ]
};

  render() {
    return (
      <View style={styles.container}>  
      <ScrollView showsVerticalScrollIndicator={false}> 
        <View style={styles.toolbar}>
          <View style={styles.navBar}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}>
            <Image style={{width: 35, height: 35}} source={require('../images/executive.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}>
            <Image style={{width: 35, height: 35}} source={require('../images/law-book.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}>
            <Image style={{width: 35, height: 35}} source={require('../images/flag.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}>
            <Image style={{width: 35, height: 35}} source={require('../images/world.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}>
            <Image style={{width: 35, height: 35}} source={require('../images/return.png')} /> 
          </TouchableOpacity>
            <View style={styles.money}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}> 
            <Text style={styles.numeros}> 125 Milhões </Text>
          </TouchableOpacity>
            </View>
          </View>  
            <View style={styles.calendar}> 
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}>
                <Image style={{width: 35, height: 35}} source={require('../images/calendario.png')} /> 
              </TouchableOpacity> 
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}> 
                <Text style={styles.numeros}> 10.10.10 </Text>
              </TouchableOpacity> 
            </View>
          </View>  
          <SafeAreaView>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          numColumns={5}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")} style={styles.item}> 
                <View>  
                  <Image style={{width: 55, height: 55}} source={item.src} /> 
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
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
    backgroundColor: '#CCC',
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
    fontSize: 23
  },
  money:{
    marginLeft: -20,
  },
  item: {
    alignItems: "center",
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
