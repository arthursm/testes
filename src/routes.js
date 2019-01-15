import { createStackNavigator, DrawerNavigator } from "react-navigation"; 

import Despesas from "./pages/despesas";
import Imposto from "./pages/imposto";
import DetalheIndustria from "./pages/detalheindustria";
import Home from "./pages/home"; 
import Ministerios from "./pages/ministerios";
import Saude from "./pages/components/saude";
import Educacao from "./pages/components/educacao";
import Pais from "./pages/pais";
import Executivo from "./pages/executivo";
import Legislativo from "./pages/legislativo"; 
import Industria from "./pages/industria";

let titulo = "Informações";

export default createStackNavigator (
  {
    Despesas,
    Imposto,
    DetalheIndustria,
    Home,
    Industria,
    Ministerios,
    Saude,
    Educacao,
    Pais,
    Executivo,
    Legislativo
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