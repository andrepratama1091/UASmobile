import React, { Component } from "react";
import { View, Text,Button,TextInput, StyleSheet, Image, TouchableHighlight} from "react-native"; 
import Header from "./Header";
class ViewListPeminjaman extends Component {
    static navigationOptions = {
        header: null
    }
    render() {     
        return (    
            <View style={styles.vHeader}>
                <Header header={"Aplikasi Mobile FingkyAgustin 1715051068"} />
            </View>
        );   
    } 
}   

   const styles = StyleSheet.create({
    vHeader: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        flex: 0.2,
        margin:20,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    box2: {
        flex: 0.2,
        margin:20,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        marginBottom: 250,
    },
    txtBox2: {
        color: 'white',
        alignItems: 'center',
        fontSize: 18,

    },
    txtBox1: {
        width: 160,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#2E8B57',
        alignItems: 'center',
        justifyContent: 'center', 
      },
    textBox2:{
        color: 'white',
        fontSize: 15,    
      },
    BoxStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'brown',
      borderRadius: 5,
      padding:20,
      margin:10,
      width: '80%',
      height: 50, 
    }
});

export default ViewListPeminjaman;