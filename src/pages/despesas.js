import React, {Component} from 'react';
import {Picker, FlatList, SafeAreaView, Text, TouchableOpacity, Image, View, ScrollView, TextInput} from 'react-native';
import { styles } from './components/despesas.css';
import { FormLabel, Button } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';

export default class Despesas extends Component { 
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
      ]};

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
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Ministerios")}>
            <Image style={{width: 45, height: 45, zIndex:1, marginTop: 3}} source={require('../images/book2.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}>
            <Image style={{width: 35, height: 35, zIndex:1, marginTop: 6}} source={require('../images/globe.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("DetalheIndustria")}>
            <Image style={{width: 47, height: 47}} source={require('../images/dinheiro.png')} /> 
          </TouchableOpacity>
            <View style={styles.money}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Imposto")}> 
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
                    <Image style={styles.imagem} source={require('../images/economy/usdup.png')} /> 
                    <Text style={styles.title}>Finanças</Text>                        
                    <Image style={styles.imagem} source={require('../images/economy/usddown.png')} />  
                  </View> 
             <FlatList
              data={this.state.despesas}
              keyExtractor={item => item.custo}
              numColumns={1}
              renderItem={({ item }) => {
                return (    
                      <View>
                        <View style={styles.conteudo}> 
                        <View style={styles.revenue1}>
                            <Image style={styles.dolar} source={item.lucroSrc} /> 
                            <Text style={styles.text}>{item.nomeLucro}</Text> 
                            <Image style={styles.dolar} source={require('../images/economy/usdup.png')} /> 
                            <Text style={styles.text}>{item.lucro}</Text> 
                        </View> 
                      
                        <View style={styles.revenue2}>
                            <Image style={styles.dolar} source={item.custoSrc} /> 
                            <Text style={styles.text}>{item.nomeCusto}</Text> 
                            <Image style={styles.dolar} source={require('../images/economy/usddown.png')} /> 
                            <Text style={styles.text}>{item.custo}</Text> 
                        </View> 
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