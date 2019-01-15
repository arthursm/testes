import {Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

export const styles = {
    container: {  
      flex: 1, 
      backgroundColor: '#c8d6e5', 
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


    

    title: {
      color: "#333333",
      fontSize: 22, 
    }, 
    imagem: {
      width:  30, 
      height: 30, 
    },    
    imposto:{  
      color: '#000',
      fontSize: 16,
      paddingTop: 4, 
      fontWeight: 'normal', 
      marginLeft: 10
    }, 
    dolar: {
        width: 20, 
        height: 20, 
        marginTop: 8,   
    },
    text: {
      color: "#333333",
      fontSize: 15, 
      marginTop: 7,  
    }, 
    conteudo:{ 
      flexDirection: 'row',
      justifyContent: 'space-between',   
      paddingTop: 3, 
      width: 417,
    },   
    revenue:{ 
      flexDirection: 'row',
      justifyContent: 'flex-start',  
      position: 'absolute',
      marginLeft: 440,
      zIndex: 20,
    },   
    revenue2:{ 
      flexDirection: 'row',
      justifyContent: 'flex-start',  
      position: 'absolute',
      marginLeft: 510,
      zIndex: 20,
    },
    content: {
      flex: 1,  
      width: 430, 
    },  
    header:{ 
      height: 40,
      borderBottomWidth: 1,
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-between',  
      margin: 4,   
      width: 585
    },
    head:{
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-between',  
    }, 
    botao: {     
      backgroundColor: "rgba(16, 172, 132, 1)",
      marginLeft: 450,
      paddingTop: 10,
      width: 120,
      height: 35,
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 5, 
    },
    tabela: { 
      flex: 1,
      padding: 16, 
      paddingTop: 30,  
    }, 
    text: { 
      margin: 6 
    }
  }