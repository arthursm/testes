import React, {Component} from 'react';
import {Picker, FlatList, SafeAreaView, Text, TouchableOpacity, Image, View, ScrollView, TextInput} from 'react-native';
import { styles } from './components/industria.css';
import { FormLabel, Button } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';

export default class DetalheIndustria extends Component { 
    state = { 
      industria: [
        { id: "03", 
        rank: "5",
        prodAtual: "1000",
        prodMundial: "1",
        emprAtual:"11", 
        emprPorcentagem:"1",
        precoProducao: "3.20", 
        precoVenda: "3.22", 
        precoCompra:"4.55", 
        totalVendas:"220",
        totalCompras:"110",
        balanca: "100",
        nationalFocus: "10",
        taxa:"10",
        warning: require('../images/economy/warn.png'),
        economy: require('../images/economy/down.png'),
        name:"Água",
        icon: require('../images/industry/laundry.png') },         
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
          data={this.state.industria}
          keyExtractor={item => item.id}
          numColumns={1}
          renderItem={({ item }) => {
            return ( 
              <View style={styles.itens}>  
                    <View style={styles.header}>
                      <Image style={styles.imagem} source={item.icon} /> 
                      <Text style={styles.title}>{item.name}</Text>  
                      <Image style={styles.economy} source={item.economy} />  
                    </View>
                    <View style={styles.dados}>
                      <View style={styles.subdados}>  
                    <Image style={{width: 25, height: 25}} source={require('../images/economy/rank.png')} /> 
                    <Text style={styles.text}>{item.rank}º</Text>      
                    <Image style={{width: 25, height: 25}} source={require('../images/industry/conveyor.png')} /> 
                    <Text style={styles.text}>{item.prodAtual}</Text>   
                    <Image style={{width: 25, height: 25}} source={require('../images/industry/conveyor.png')} /> 
                    <Text style={styles.text}>{item.prodMundial}%</Text> 
                      </View> 
                      <View style={styles.subdados}>  
                    <Image style={{width: 25, height: 25}} source={require('../images/economy/usdeup.png')} /> 
                    <Text style={styles.text}>{item.precoVenda}</Text>  
                    <Image style={{width: 25, height: 25}} source={require('../images/economy/usdedown.png')} /> 
                    <Text style={styles.text}>{item.precoCompra}</Text> 
                    <Image style={{width: 25, height: 25}} source={require('../images/economy/usdesame.png')} /> 
                    <Text style={styles.text}>{item.precoVenda}</Text>  
                      </View> 
                      <View style={styles.subdados}>  
                    <Image style={{width: 25, height: 25}} source={require('../images/economy/usdup.png')} /> 
                    <Text style={styles.text}>{item.totalVendas}</Text>  
                    <Image style={{width: 25, height: 25}} source={require('../images/economy/usddown.png')} /> 
                    <Text style={styles.text}>{item.totalCompras}</Text>  
                    <Image style={{width: 25, height: 25}} source={require('../images/economy/usdsame.png')} /> 
                    <Text style={styles.text}>{item.balanca}</Text>  
                      </View> 
                      <View style={styles.subdados}>     
                    <Image style={{width: 25, height: 25}} source={require('../images/economy/employee.png')} /> 
                    <Text style={styles.text}>{item.emprPorcentagem}%</Text> 
                    <Image style={{width: 25, height: 25}} source={require('../images/economy/tax.png')} /> 
                    <Text style={styles.text}>{item.taxa}%</Text>  
                    <Image style={{width: 25, height: 25}} source={require('../images/economy/focus.png')} /> 
                    <Text style={styles.text}>{item.nationalFocus}</Text> 
                      </View>  
                    <View style={styles.aviso}>
                      <Image style={styles.warning} source={item.warning} /> 
                      <Text style={styles.titleAviso}>Aviso </Text>                         
                    </View>
                    <Text style={styles.conteudoAviso}> A infraestrutura do seu país está reduzindo a produção de água</Text>                       
                    </View> 
              </View>  
            );
          }}
        />  


          <View style={styles.deal}>
          
          <View style={styles.dealheaderTitle}>  
                    <Image style={{width: 30, height: 30}} source={require('../images/economy/deal.png')} /> 
                      <Text style={styles.title}>Comércio</Text>  
                    <Image style={{width: 30, height: 30}} source={require('../images/globe.png')} /> 

                    </View>
            <View style={styles.dealHeader}>
              <FormLabel labelStyle={styles.label}>País: </FormLabel> 
                <Picker style={styles.select} >
                  <Picker.Item label="Ruthenia" value="java" />
                  <Picker.Item label="Kosovo" value="js" />
                </Picker>
            </View>
            <View style={styles.dealHeader}>
              <FormLabel labelStyle={styles.label} >Tipo: </FormLabel>
              <Picker 
                style={styles.select} >
                <Picker.Item label="Compra única" value="java" />
                <Picker.Item label="Compra recorrente" value="js" />
                <Picker.Item label="Venda única" value="java" />
                <Picker.Item label="Venda recorrente" value="js" />
              </Picker>  
            </View> 
             <View style={styles.dealConteudo}>
              <Text style={styles.dealSubInfo}>Quantidade: </Text>
              <NumericInput  
            totalWidth={120} 
            totalHeight={30} 
            step={100}
            valueType='integer'
            rounded 
            textColor='#000' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#10ac84' 
            leftButtonBackgroundColor='#10ac84'/>
              </View>
            <View style={styles.dealConteudo}>
              <Image style={{width: 25, height: 25}} source={require('../images/countries/1.png')} /> 
              <Text style={styles.dealInfo}> Consumo: 12.543</Text>
              </View> 
            <View style={styles.dealConteudo}>
              <Image style={{width: 25, height: 25}} source={require('../images/countries/1.png')} /> 
              <Text style={styles.dealInfo}> Produção: 9.543</Text>
              </View>  
            <View style={styles.dealConteudo}>
              <Image style={{width: 25, height: 25}} source={require('../images/countries/2.png')} /> 
              <Text style={styles.dealInfo}> Disponivel: 10.543</Text>
              </View>
            <View style={styles.dealConteudo}>
              <Image style={{width: 25, height: 25}} source={require('../images/economy/tax.png')} /> 
              <Text style={styles.dealInfo}> O.M.C: 543</Text>
              </View>              
            <View style={styles.dealConteudo}>
              <Image style={{width: 25, height: 25, marginTop: 3}} source={require('../images/economy/usdsame.png')} /> 
              <Text style={styles.dealTotal}> Total: 12.543</Text>
                <Button title='Enviar acordo' buttonStyle={styles.botao}/>
              </View>
          </View>

      </SafeAreaView>
      </ScrollView>   
        
      </View>
      
    );
  }
}  