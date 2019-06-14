import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,ImageBackground} from "react-native";
import Header from "./Header";
 
const axios = require('axios');
class Peminjaman extends Component {
  static navigationOptions = {
    header: null
}
    constructor(props) {
        super(props);
        this.state = {
          tgl_pinjam: '',
          tgl_kembali: '',
          buku_kode: '',
          id_cus: '',
          id_pegawai: '',

      }
  }
  handleSubmit = event => {
    axios.post('http://dre1091.000webhostapp.com/Apiuas/tambahBuku.php', {
        tgl_pinjam: this.state.tgl_pinjam,
        tgl_kembali: this.state.tgl_kembali,
        buku_kode: this.state.buku_kode,
        id_cus: this.state.id_cus,
        id_pegawai: this.state.id_pegawai
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

  render() {   
      return (
        <ImageBackground source={require("./images/B2.jpg")} style={{width: '100%', height: '100%' }}>
        <View style={styles.vMain}>
        <ScrollView>
            <View style={styles.vHeader}>
              
                
               	<View style={styles.box1}>
                  <View style={styles.textBox1}>
                    <Text>Tanggal_pinjam</Text>
                  </View>
                  <TextInput
                    style={styles.txtBox1}
                    onChangeText={tgl_pinjam => this.setState({ tgl_pinjam })}
                  />
                  
                </View>
                <View style={styles.box1}>
                  <Text>Tanggal Pengembalian</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={tgl_kembali => this.setState({ tgl_kembali })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>Kode Buku</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={buku_kode => this.setState({ buku_kode })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>ID Customer</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={id_cus => this.setState({ id_cus })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>ID pegawai</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={id_pegawai => this.setState({ id_pegawai })}
                    />
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => {    
                                this.handleSubmit()
                            }}
                  >
                  <Text style={styles.txtButton}>Add Data Peminjaman</Text>
                  </TouchableHighlight>
                </View>   
            </View>   
        </ScrollView>
        </View>
        </ImageBackground>
        );
      }
  }
   const styles = StyleSheet.create({
    vMain:{
        flex: 1,
 
    },
    txtHeader: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    
      backgroundColor: '#919191',
    },
    header: {
      height:70,
  
      justifyContent:'center',
      alignItems:'center'
    },
    vHeader: {
       flex: 1,
       
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        flex: 0.5,
        width: "90%",
        marginTop: 10,
        marginLeft: 2,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    txtBox1: {
        width: 160,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#919191',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    textBox1:{
        color: 'white',
        fontSize: 15,    
    },
    box2: {
        flex: 0.8,
        margin:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },
    vButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#919191',
        borderRadius: 5,
        padding:20,
        margin:10,
        width: '100%',
        height: 50, 
    },
    txtBox2: {
        color: 'white',
        alignItems: 'center',
        fontSize: 15,
        textAlign: 'center',
    },
    txtTeks: {
        color: 'black',
        fontSize: 18,
        marginBottom:10,
    }
});
export default Peminjaman;