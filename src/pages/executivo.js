import React, {Component} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import { createBottomTabNavigator } from "react-navigation";
import { styles } from './components/despesas.css';

export default class Executivo extends Component { 
    state = {
      despesas: [ 
        {nomeLucro: "Automóveis", lucro:"521", nomeCusto: "Água", custo: "253", lucroSrc: require('../images/industry/car.png'), custoSrc: require('../images/industry/water.png') },
        {nomeLucro: "", lucro:"521", nomeCusto: "", custo: "253", lucroSrc: require('../images/economy/usdup.png'), custoSrc: require('../images/economy/usdup.png') },          
        {nomeLucro: "", lucro:"521", nomeCusto: "", custo: "253", lucroSrc: require('../images/economy/usdup.png'), custoSrc: require('../images/economy/usdup.png') },          
        {nomeLucro: "", lucro:"521", nomeCusto: "", custo: "253", lucroSrc: require('../images/economy/usdup.png'), custoSrc: require('../images/economy/usdup.png') },          
        {nomeLucro: "", lucro:"521", nomeCusto: "", custo: "253", lucroSrc: require('../images/economy/usdup.png'), custoSrc: require('../images/economy/usdup.png') },            
        {nomeLucro: "", lucro:"521", nomeCusto: "", custo: "253", lucroSrc: require('../images/economy/usdup.png'), custoSrc: require('../images/economy/usdup.png') },          
        {nomeLucro: "", lucro:"521", nomeCusto: "", custo: "253", lucroSrc: require('../images/economy/usdup.png'), custoSrc: require('../images/economy/usdup.png') },                  
        {nomeLucro: "", lucro:"521", nomeCusto: "", custo: "253", lucroSrc: require('../images/economy/usdup.png'), custoSrc: require('../images/economy/usdup.png') },                  
        {nomeLucro: "", lucro:"521", nomeCusto: "", custo: "253", lucroSrc: require('../images/economy/usdup.png'), custoSrc: require('../images/economy/usdup.png') },                  
        {nomeLucro: "", lucro:"521", nomeCusto: "", custo: "253", lucroSrc: require('../images/economy/usdup.png'), custoSrc: require('../images/economy/usdup.png') },                  
        {nomeLucro: "TOTAL", lucro:"12435", nomeCusto: "TOTAL", custo: "25653", lucroSrc: require('../images/economy/none.png'), custoSrc: require('../images/economy/none.png') },                  
      ],
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
        { id: "00", name: "Relâmpagoaa ", src: require('../images/ministerios/agricultura.png') },
        { id: "01", name: "Agente aTom ", src: require('../images/ministerios/ciencia.png') },
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/defesa.png') },
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/educacao.png') },
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/financas.png') },
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/saude.png') },
        { id: "02", name: "Doc Hudsaaon", src: require('../images/ministerios/energia.png') },
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/road.png') }, 
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/flats.png') },         
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/global.png') },         
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/esporte.png') },         
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/trabalho.png') },         
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/tanque.png') },         
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/industria.png') },     
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/oil.png') },     
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/mina.png') },     
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/family.png') },     
        { id: "03", name: "Cruz Ramirez", src: require('../images/ministerios/vote.png') },     
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
      <View style={styles.head}>
                <View style={styles.content}>           
                  <View style={styles.header}>
                    <Image style={styles.imagem} source={require('../images/ministerios/ministra.png')} /> 
                    <Text style={styles.title}>Ministerios</Text>                        
                    <Image style={styles.imagem} source={require('../images/ministerios/ministro.png')} />  
                  </View> 
             <FlatList
              data={this.state.ministerios}
              keyExtractor={item => item.custo}
              numColumns={6}
              renderItem={({ item }) => {
                return (    
                      <View> 
                        <View style={styles.ministerios}>   
                            <Image style={styles.ministro} source={item.src} /> 
                        </View>  
                      </View>
                )}}/>                              
          </View>      
        </View> 
          </SafeAreaView>   
      </ScrollView> 
      </View>
    );
  }
} 
