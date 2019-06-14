import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Kategori from "./Kategori";
import Peminjaman from "./Peminjaman";
import Main from "./Main";
import ViewGambar from "./ViewGambar";
import ViewListPeminjaman from "./ViewListPeminjaman";
import DetailK from "./DetailK";
import Login from "./Login";


const AppContainer = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    Kategori: { 
      screen: Kategori
    },
    Peminjaman: {
      screen: Peminjaman
    },
    ViewGambar: {
    screen: ViewGambar
    },
    ViewListPeminjaman: {
      screen: ViewListPeminjaman
    },
    Detail: {
      screen: DetailK
    },
    Login: {
      screen: Login
    },


  },
  {
    initialRouteName: "Login"
  }
);
const Menu = createAppContainer(AppContainer);
export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
