import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {ListItem,Icon } from 'react-native-elements'
import axios from 'axios';


export default class DetailK extends  React.Component {
  static navigationOptions = {
    header: null
}
  constructor(props) {
    super(props)
    prefik_url = 'http://wadaya.rey1024.com/upload/kategori/';
    this.state = {
        data: [],
        kategori_id:this.props.navigation.state.params.kategori_id,
    };
  }
  
  componentDidMount() {
    axios.get('http://dre1091.000webhostapp.com/Apiuas/getBuku.php?kategori=id'
    + this.state.kategori_id)
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
  }
  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
  <ListItem
    title={item.buku_judul}
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
            <Text style={styles.txtHeader}> Daftar Buku </Text>
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
    color: '#919191',

    },
    header: {
    height:70,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
    },
});