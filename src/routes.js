import { createStackNavigator, DrawerNavigator } from "react-navigation"; 


import Home from "./pages/home"; 
import Ministerios from "./pages/ministerios";

let titulo = "Informações";

export default createStackNavigator (
  {
    Home,
    Ministerios
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#004f8b"
      },
      title: titulo,
      headerTintColor: "#FFF",
      header: null,
    }
  }


);