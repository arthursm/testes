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
    header:{ 
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-between', 
      width: 250,
      margin: 4,   
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
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: '#344E5D',
      width: 280,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      backgroundColor: "#c8d6e5", 
      flexGrow: 1,
      margin: 4,   
      padding: 5,
      flexBasis: 0,
    },
    subdados:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center',
      backgroundColor: "#c8d6e5", 
      flexGrow: 1,
      width: 250,
      margin: 4,   
      flexBasis: 0,
  
    },
    dados: { 
      borderTopWidth: 1,
      borderColor: '#344E5D',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      backgroundColor: "#c8d6e5", 
      flexGrow: 1,
      margin: 4,  
      flexBasis: 0,
      marginTop: 10,
      paddingTop: 10,
      width: 250,
    },
    title: {
      color: "#333333",
      fontSize: 22, 
    },
    text: {
      color: "#333333",
      fontSize: 16, 
    },
    imagem: {
      width:  30, 
      height: 30, 
    },
    warning: {  
      maxHeight: 25,
      maxWidth: 25,  
    },
    economy: {  
      maxHeight: 15,
      maxWidth: 15,  
      marginTop: 12 
    },  
    aviso:{ 
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'center', 
      width: 250,
      margin: 4,  
      textAlign: 'center',
      marginTop: 10,
      paddingTop: 10,
      borderTopWidth: 1,
      borderColor: '#344E5D',
    },
    titleAviso: {
      color: "#333333",
      fontSize: 18, 
      marginLeft: 10, 
    },
    conteudoAviso:{
      maxWidth: 250, 
      color: "#333333",
      textAlign: 'center'
    },
    deal:{
      position:'absolute',
      marginLeft: 300, 
      maxWidth: 320,
      borderRightWidth: 1,  
      marginTop: 5,
      height: 290,
    },
    dealHeader:{
      flexDirection: 'row',
      justifyContent: 'flex-start', 
      marginTop: -12,      
    },
    dealConteudo:{ 
      flexDirection: 'row',
      justifyContent: 'flex-start',  
      paddingTop: 5,
    },
    select:{
      marginLeft: -20,
      height: 35,
      marginTop: 8, 
      width: 230, 
    },
    label:{ 
      color: '#000',
      fontSize: 16,
      fontWeight: 'normal',
      marginLeft: 0,
    },
    dealInfo:{
      color: '#000',
      paddingTop: 2,
    },
    dealSubInfo:{  
      color: '#000',
      fontSize: 16,
      fontWeight: 'normal', 
    },
    dealTotal:{  
      color: '#000',
      fontSize: 16,
      fontWeight: 'normal', 
      marginTop: 5
    },
    dealQuanty: {
      borderBottomWidth: 1, 
      width: 175,
      height: 30,
      color: '#000',
      fontSize: 15,  
      marginTop: -3,
    },    
    dealheaderTitle:{ 
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-between', 
      width: 270,
      margin: 4,   
    },
    botao: {     
      backgroundColor: "rgba(16, 172, 132, 1)",
      marginLeft: 20,
      width: 120,
      height: 35,
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 5, 
    }
  }