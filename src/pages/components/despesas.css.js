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
        width: 25, 
        height: 25, 
        marginTop: 8,   
    },
    text: {
      color: "#333333",
      fontSize: 16, 
      marginTop: 7,  
      margin: 6,
    }, 
    conteudo:{ 
      flexDirection: 'row',
      justifyContent: 'space-between',   
      width: 550,
      marginLeft: 20,
      marginTop: 2,
      borderColor: '#576574',  
      borderBottomWidth: 0.8
    },   
    revenue:{ 
      flexDirection: 'row',
      justifyContent: 'flex-start',   
    },      
    revenue1:{ 
      flexDirection: 'row',
      justifyContent: 'flex-start',   
    },   
    revenue2:{ 
      flexDirection: 'row',
      justifyContent: 'flex-start',  
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
    tabela: { 
      flex: 1,
      padding: 16, 
      paddingTop: 30,  
    },  
    ministerios:{
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        paddingLeft: 10,

    },
    ministro: {
        width: 60, 
        height: 60, 
        margin: 10,   
        marginLeft: 10,
        marginRight: 20, 
    },
  }