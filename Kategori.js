import React from 'react';
import { StyleSheet, Text, View, FlatList,TouchableHighlight} from 'react-native';
import {ListItem, Icon } from 'react-native-elements'
import axios from 'axios';


export default class Kategori extends  React.Component {
  static navigationOptions = {
    header: null
}

  constructor(props) {
    super(props)
    prefik_url = 'http://wadaya.rey1024.com/upload/kategori/';
    this.state = {
        data: []
    };
  }
  
  componentDidMount() {
    axios.get(`http://dre1091.000webhostapp.com/Apiuas/getKategoriBuku.php`)
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
  }
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
  <ListItem
    onPress={ 
        ()=>this.props.navigation.navigate('Detail',{ 
            kategori_id: item.kategori_id }) 
        }
    title={item.kategori_nama}
    leftAvatar={{ source: { uri: prefik_url+item.gambar } }}
    rightIcon={{
      name : 'create'
    }}

  />
)
  render() {
    return (
        <View style={styles.container} >
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Kategori Buku </Text>
          </View>
            <FlatList
               keyExtractor={this.keyExtractor}
               data={this.state.categories}
               renderItem={this.renderItem}
               

             />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
       flex: 1,
       backgroundColor: '#919191',
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#919191',

  },
  header: {
    height:70,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
});