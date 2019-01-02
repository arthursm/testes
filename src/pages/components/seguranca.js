import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, ImageBackground, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import { createBottomTabNavigator } from "react-navigation";
import StarRating from 'react-native-star-rating';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

export default class Seguranca extends React.Component {
    
    state = {
      starCount: 3.5,
      fav1: 'Promover',
       items: [
        {
            label: 'Promover',
            value: 'football',
        },
        {
            label: 'Tolerar',
            value: 'baseball',
        },
        {
            label: 'Proibir',
            value: 'hockey',
        }
    ],
    fav2: 'Eutanasia ilegal',
    items2: [
      {
          label: 'Eutanasia ilegal',
          value: 'football',
      },
      {
          label: 'Eutanasia passiva legalizada',
          value: 'baseball',
      },
      {
        label: 'Eutanasia passiva ou suicidio legalizados',
          value: 'hockey',
      }
    ],
    
    fav3: 'Aborto ilegal',
    items3: [
      {
          label: 'Aborto legalizado',
          value: 'football',
      },
      {
          label: 'Legal em caso de estupro ou má formação',
          value: 'baseball',
      },
      {
        label: 'Legal em caso de estupro',
          value: 'hockey',
      },
      {
        label: 'Aborto ilegal',
          value: 'hockey',
      }
    ], 
    };
      onStarRatingPress(rating) {
        this.setState({
         starCount: rating
        });
      }
     
        render() {
          //const { dados } = this.props.navigation.state.params
          return (   
            <View style={styles.container}>   
            <ScrollView showsVerticalScrollIndicator={false}> 
          <View style={styles.acaoHealth}>
          <View><Text style={styles.titleHealth}>Ministério da Segurança <Text style={styles.indiceHealth}> 8.13</Text></Text></View>
          <View><Text style={styles.acaoTextHealth}>Ações</Text></View>
          <View style={styles.health}>
          <View>
            <Text style={styles.textHealth}>
                Segurança pessoal
            </Text>        
            <Text style={styles.textHealth}>
                Segurança pública
            </Text>
            <Text style={styles.textHealth}>
                Polícia rodoviaria
            </Text>
            <Text style={styles.textHealth}>
                Esquadrão de investigação de crimes
            </Text>
            <Text style={styles.textHealth}>
                Força tarefa contra drogas
            </Text>
            <Text style={styles.textHealth}>
                Força tarefa contra imigração ilegal
            </Text>
          </View> 
              <View style={styles.startHealth}> 
                <StarRating disabled={false} starSize={30} maxStars={5} halfStarEnabled={true} rating={this.state.starCount} selectedStar={(rating) => this.onStarRatingPress(rating)}/>
                <StarRating disabled={false} starSize={30} maxStars={5} halfStarEnabled={true} rating={this.state.starCount} selectedStar={(rating) => this.onStarRatingPress(rating)}/>
                <StarRating disabled={false} starSize={30} maxStars={5} halfStarEnabled={true} rating={this.state.starCount} selectedStar={(rating) => this.onStarRatingPress(rating)}/>
                <StarRating disabled={false} starSize={30} maxStars={5} halfStarEnabled={true} rating={this.state.starCount} selectedStar={(rating) => this.onStarRatingPress(rating)}/>
                <StarRating disabled={false} starSize={30} maxStars={5} halfStarEnabled={true} rating={this.state.starCount} selectedStar={(rating) => this.onStarRatingPress(rating)}/>
                <StarRating disabled={false} starSize={30} maxStars={5} halfStarEnabled={true} rating={this.state.starCount} selectedStar={(rating) => this.onStarRatingPress(rating)}/>
              </View>
            </View>
          <View><Text style={styles.lawTextHealth}>Legislação</Text></View>
                <View style={styles.lawHealth}> 
                  <Text style={styles.textHealth}>Regulação de Eutanasia / Suicidio</Text>
                    <Picker style={styles.selectHealth}>
                        <Picker.Item style={styles.selectHealth}  label={this.state.items2[0].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items2[1].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items2[2].label} value="java" />
                    </Picker>
                  <Text style={styles.textHealth}>Regulação de Contraceptivos</Text>
                    <Picker style={styles.selectHealth}>
                        <Picker.Item style={styles.selectHealth}  label={this.state.items[0].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items[1].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items[2].label} value="java" />
                    </Picker>
                   <Text style={styles.textHealth}>Regulação do Aborto</Text>
                   <Picker style={styles.selectHealth}>
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[0].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[1].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[2].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[3].label} value="java" />
                    </Picker>
                   <Text style={styles.textHealth}>Regulação do Aborto</Text>
                   <Picker style={styles.selectHealth}>
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[0].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[1].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[2].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[3].label} value="java" />
                    </Picker>
                   <Text style={styles.textHealth}>Regulação do Aborto</Text>
                   <Picker style={styles.selectHealth}>
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[0].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[1].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[2].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[3].label} value="java" />
                    </Picker>
                   <Text style={styles.textHealth}>Regulação do Aborto</Text>
                   <Picker style={styles.selectHealth}>
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[0].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[1].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[2].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[3].label} value="java" />
                    </Picker>
                   <Text style={styles.textHealth}>Regulação do Aborto</Text>
                   <Picker style={styles.selectHealth}>
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[0].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[1].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[2].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[3].label} value="java" />
                    </Picker>
                   <Text style={styles.textHealth}>Regulação do Aborto</Text>
                   <Picker style={styles.selectHealth}>
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[0].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[1].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[2].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[3].label} value="java" />
                    </Picker>
                   <Text style={styles.textHealth}>Regulação do Aborto</Text>
                   <Picker style={styles.selectHealth}>
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[0].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[1].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[2].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[3].label} value="java" />
                    </Picker>
                   <Text style={styles.textHealth}>Regulação do Aborto</Text>
                   <Picker style={styles.selectHealth}>
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[0].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[1].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[2].label} value="java" />
                        <Picker.Item style={styles.selectHealth}  label={this.state.items3[3].label} value="java" />
                    </Picker>
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
    color: 'black'
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
    startHealth:{ 
      width: 250,  
      paddingTop: 5,
      flexDirection: 'column',
      justifyContent: 'space-between', 
      paddingLeft: 20,
    },
    textHealth:{
      fontSize: 16,  
      maxWidth: 350,
      paddingTop: 10,
      color: 'black'
    },
    health: { 
      flexDirection: 'row',
      justifyContent: 'space-between', 
      paddingLeft: 40,
      paddingRight: 40, 
      color: 'black'
    },
    titleHealth:{
      fontSize: 24,  
      paddingLeft: 5, 
      color: 'black',
    },
    indiceHealth:{
      fontSize: 16, 
      color: 'black' 
    },
    acaoTextHealth:{
      fontSize: 20,  
      paddingLeft: 10,
      paddingTop: 8,
      color: 'black'
    },
    acaoHealth:{
      paddingTop: 10,
      color: 'black'
    },
    lawTextHealth:{
      fontSize: 20,  
      paddingLeft: 10,
      paddingTop: 20,
      color: 'black'
    },
    lawHealth:{
      fontSize: 16, 
      paddingLeft: 40,
      maxWidth: 350,
      color: 'black'
    }, 
    selectHealth:{
      color: 'black',   
      maxWidth: 450,
      paddingLeft: 20,
    }
  });
  