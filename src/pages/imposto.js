import React, {Component} from 'react';
import {Picker, FlatList, SafeAreaView, Text, TouchableOpacity, Image, View, ScrollView, TextInput} from 'react-native';
import { styles } from './components/financas.css';
import { FormLabel, Button } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';

export default class Imposto extends Component { 
    state = { 
      impostos: [ 
        {sigla: "IPI (%):", name: "Sobre Produto Industrializado (%): ", quantidade: "155", src: require('../images/economy/usdup.png') },
        {sigla: "IR (%): ", name: "Sobre a Renda (%): ", quantidade: "155", src: require('../images/economy/usdup.png') },          
        {sigla: "ICMS (%):", name: "Sobre Circulação de Mercadorias (%): ", quantidade: "155", src: require('../images/economy/usdup.png') },          
        {sigla: "IPVA (%):", name: "Sobre Propriedade de Veículos (%): ", quantidade: "155", src: require('../images/economy/usdup.png') },          
        {sigla: "IPTU (%):", name: "Sobre Propriedade Urbana (%): ", quantidade: "155", src: require('../images/economy/usdup.png') },            
        {sigla: "INSS (%):", name: "Instituto Nacional de Seguro Social (%): ", quantidade: "155", src: require('../images/economy/usdup.png') },          
        {sigla: "FGTS (%):", name: "Fundo de Garantia por Tempo de Serviço (%):", quantidade: "155", src: require('../images/economy/usdup.png') },          
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
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Legislativo")}>
            <Image style={{width: 45, height: 45, zIndex:1, marginTop: 3}} source={require('../images/book2.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Saude")}>
            <Image style={{width: 35, height: 35, zIndex:1, marginTop: 6}} source={require('../images/globe.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("DetalheIndustria")}>
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
                    <Image style={styles.imagem} source={require('../images/economy/tax.png')} /> 
                    <Text style={styles.title}>Impostos</Text>                        
                    <Image style={styles.imagem} source={require('../images/economy/tax.png')} />  
                  </View> 
             <FlatList
              data={this.state.impostos}
              keyExtractor={item => item.name}
              numColumns={1}
              renderItem={({ item }) => {
                return (    
                      <View>
                        <View style={styles.conteudo}>
                            <Text style={styles.imposto}>{item.name}</Text> 
                            <NumericInput totalWidth={80} totalHeight={30} minValue={0} maxValue={30} step={1} valueType='integer' rounded textColor='#000' iconStyle={{ color: 'white' }} rightButtonBackgroundColor='#10ac84' leftButtonBackgroundColor='#10ac84'/>                                          
                        </View> 

                        <View style={styles.revenue}>
                  <Image style={styles.dolar} source={require('../images/economy/usdup.png')} /> 
                  <Text style={styles.text}>54564</Text> 
                </View> 
                        <View style={styles.revenue2}>
                  <Image style={styles.dolar} source={require('../images/economy/usdup.png')} /> 
                  <Text style={styles.text}>58484</Text> 
                </View> 
                      </View>
                )}}/>                              
          </View>      
        </View>
                <Button title='Alterar' buttonStyle={styles.botao}/>
          </SafeAreaView>      
      </ScrollView>    
       
  </View>
      
    );
  }
}  