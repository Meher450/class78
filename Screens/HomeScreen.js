import React,{Component} from 'react';
import {Text, Image, View, StyleSheet, SafeAreaView, StatusBar, Platform, ImageBackground, TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
      
      <ImageBackground source={require('../assets/bg_image.png')}
      style={styles.backGroundImage}>

      <Text style={styles.titleText}>ISS Tracker App</Text>

      <TouchableOpacity style={styles.routeCard} 
      onPress={()=>{
        this.props.navigation.navigate("IssLocationScreen")
      }}>
      <Text style={styles.routeText}>ISS Location</Text>
      <Text style={styles.knowMore}>{"Know More..."}</Text>
      <Text style={styles.bgDigit}>1</Text>
      <Image source={require('../assets/iss_icon.png')}
      style={styles.iconImage}>
      </Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.routeCard}
      onPress={()=>{
        this.props.navigation.navigate("MeterorScreen")
      }}>
      <Text style={styles.routeText}>Meterors</Text>
      <Text style={styles.knowMore}>{"Know More..."}</Text>
      <Text style={styles.bgDigit}>2</Text>
      <Image source={require('../assets/meteor_icon.png')}
      style={styles.iconImage}>
      </Image>
      </TouchableOpacity>

      </ImageBackground>
      </View>
    )
  }
}

const styles=StyleSheet.create({
container:{
  backgroundColor: "Black",
  flex:5,
  marginLeft:-20
},
droidSafeArea:{
  marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
},
backGroundImage:{
  flex:1,
  resizeMode:'cover',
},
routeCard:{
  flex:0.25,
  marginLeft:50,
  marginRight:50,
  marginTop:50,
  borderRadius:30,
  backgroundColor:"black"
},
titleText:{
  color:"white",
  fontSize:40,
  marginLeft:50
},
routeText:{
  color:'purple',
  fontSize:30,
  marginTop:5,
  marginLeft:5,
  marginBottom:50,
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center'
},
knowMore:{
  paddingLeft:30,
  color:"lightblue",
  fontSize:15
},
bgDigit:{
  position:"absolute",
  color:"lightgreen",
  fontSize:60,
  bottom:-10,
  right:20
},
iconImage:{
  position:"absolute",
  height:100,
  width:100,
  right:45,
  bottom:-10,
  resizeMode:'contain'
}
})