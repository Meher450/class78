import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class MeterorScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text>Meteror</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
container:{
  backgroundColor: "Black",
  flex:1,
}
})