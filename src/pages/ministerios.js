import React, {Component} from 'react';
import {ScrollView, Text, View, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import { createBottomTabNavigator } from "react-navigation";
import StarRating from 'react-native-star-rating';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import Saude from './components/saude';
import Seguranca from './components/seguranca';
/*
export default class Ministerios extends Component {
  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.toolbar}> 
          <Icon name="crown" size={30} color="#FF0000"/>
          <Icon name="dollar-sign" size={30}/>
          <Icon name="pagelines" size={30}/>
          <Icon name="industry" size={30}/>
          <Icon name="city" size={30}/> 
          <Icon name="city" size={30}/> 
          <Icon name="landmark" size={30}/> 
          <Icon name="graduation-cap" size={30}/> 
          <Icon name="hospital" size={30}/>  
          <Icon name="shield-alt" size={30}/>
          <Icon name="calendar-alt" size={30}/>
          <Icon name="crosshairs" size={30}/> 
          <Icon name="handshake" size={30}/>
          <Icon name="handshake" size={30}/>
        </View>
      </View>
    );
  }
} 
 */

class Ministerios extends React.Component {
  
    render() {
      //const { dados } = this.props.navigation.state.params
      return ( 
        <View><Text>UM</Text></View>
      );
    }
  }
  
  class Energia extends React.Component {
    render() {
      //const { dados } = this.props.navigation.state.params
      return (
        <View><Text>DOIS</Text></View>
  
      );
    }
  }

  
  class Educacao extends React.Component {
    render() {
      //const { dados } = this.props.navigation.state.params
      return (
        <View><Text>DOIS</Text></View>
  
      );
    }
  } 
  class Infraestrutura extends React.Component {
    render() {
      //const { dados } = this.props.navigation.state.params
      return (
        <View><Text>DOIS</Text></View>
  
      );
    }
  }
  
  
  class Social extends React.Component {
    render() {
      //const { dados } = this.props.navigation.state.params
      return (
        <View><Text>DOIS</Text></View>
  
      );
    }
  }
  export default createBottomTabNavigator(
    {
        Ministerios: {
        screen: Ministerios,
        navigationOptions: {
          tabBarLabel: "Ministerios",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="hotel" size={30} color={tintColor} />
          )
        }
      },
      Educacao: {
        screen: Educacao,
        navigationOptions: {
          tabBarLabel: "Educação",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="graduation-cap" size={30} color={tintColor} />
          )
        }
      },
      Saude: {
        screen: Saude,
        navigationOptions: { 
          tabBarLabel: "Saúde",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="hospital" size={30} color={tintColor} />
          )
        }
      },
      Seguranca: {
        screen: Seguranca,
        navigationOptions: {
          tabBarLabel: "Seguranca",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="shield-alt" size={30} color={tintColor} />
          )
        }
      },
      Energia: {
        screen: Energia,
        navigationOptions: {
          tabBarLabel: "Energia",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="bolt" size={30} color={tintColor} />
          )
        }
      },
      Infraestrutura: {
        screen: Infraestrutura,
        navigationOptions: {
          tabBarLabel: "Infraestrutura",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="road" size={30} color={tintColor} />
          )
        }
      }, 
      Social: {
        screen: Social,
        navigationOptions: {
          tabBarLabel: "Social",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="street-view" size={30} color={tintColor} />
          )
        }
      } 
    }, 
    {
      order: ["Infraestrutura", "Seguranca", "Educacao", "Ministerios", "Saude", "Energia", "Social"],
      tabBarOptions: {
        activeTintColor: "#004f8b",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "white"
        }
      }
    }
  ); 
