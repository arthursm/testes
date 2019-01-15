import React, {Component} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import { createBottomTabNavigator } from "react-navigation";

export default class Industria extends Component { 
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
      ],
      ministerios: [
        { id: "00", name: "Relâmpagoaa ", warning: require('../images/economy/warn.png'), economy: require('../images/economy/up.png'), name:"Água" ,icon: require('../images/industry/water.png') },
        { id: "01", name: "Agente aTom ", warning: require('../images/economy/none.png'), economy: require('../images/economy/down.png'), name:"Automoveis" ,icon: require('../images/industry/car.png') },
        { id: "03", name: "Cruz Ramirez", warning: require('../images/economy/warn.png'), economy: require('../images/economy/up.png'), name:"Cimento" ,icon: require('../images/industry/cement.png') },
        { id: "03", name: "Cruz Ramirez", warning: require('../images/economy/warn.png'), economy: require('../images/economy/same.png'), name:"Cosméticos" ,icon: require('../images/industry/makeup.png') },
        { id: "03", name: "Cruz Ramirez", warning: require('../images/economy/none.png'), economy: require('../images/economy/up.png'), name:"Eletrônicos" ,icon: require('../images/industry/imac.png') },
        { id: "03", name: "Cruz Ramirez", warning: require('../images/economy/none.png'), economy: require('../images/economy/up.png'), name:"Eletrodomesticos" ,icon: require('../images/industry/wash.png') },
        { id: "02", name: "Doc Hudsaaon", warning: require('../images/economy/none.png'), economy: require('../images/economy/down.png'), name:"Fibras" ,icon: require('../images/industry/knot.png') },
        { id: "03", name: "Cruz Ramirez", warning: require('../images/economy/none.png'), economy: require('../images/economy/down.png'), name:"Peças" ,icon: require('../images/industry/parts.png') }, 
        { id: "03", name: "Cruz Ramirez", warning: require('../images/economy/none.png'), economy: require('../images/economy/up.png'), name:"Plásticos" ,icon: require('../images/industry/plastic.png') },         
        { id: "03", name: "Cruz Ramirez", warning: require('../images/economy/warn.png'), economy: require('../images/economy/down.png'), name:"Roupas" ,icon: require('../images/industry/laundry.png') },         
      ]
    };

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
          <SafeAreaView> 
         <FlatList
          data={this.state.ministerios}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => this.props.navigation.navigate("DetalheIndustria")} style={styles.itens}>  
                    <Image style={styles.imagem} source={item.icon} /> 
                    <Text style={styles.text}>{item.name}</Text> 
                    <Image style={styles.warning} source={item.warning} />
                    <Image style={styles.economy} source={item.economy} />
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
    backgroundColor: '#fff', 
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
  itens: { 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    backgroundColor: "#c8d6e5", 
    flexGrow: 1,
    margin: 4,   
    padding: 5,
    flexBasis: 0,
  },
  text: {
    color: "#333333",
    fontSize: 16,
    paddingTop: 5,
    paddingLeft: 5    
  },
  imagem: {
    width:  30, 
    height: 30, 
  },
  warning: { 
    position: 'absolute',
    maxHeight: 15,
    maxWidth: 15,   
    marginLeft:230,
    marginTop: 12 
  },
  economy: { 
    position: 'absolute',
    maxHeight: 15,
    maxWidth: 15,   
    marginLeft:260,
    marginTop: 12 
  }
});
