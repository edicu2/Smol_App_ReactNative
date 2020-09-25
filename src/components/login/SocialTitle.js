import React, { Component } from 'react';

// Compoents
import { View, Text, StyleSheet } from 'react-native';

export default class socialTitle extends Component{

  render(){
    return (
      <View style={styles.container}>
          <Text style={[styles.font]}>Socical Login</Text>
          <Text style={styles.line}>wew</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
  },
  font: {
    zIndex:100,
    top:10,
    paddingHorizontal:10,
    backgroundColor:'#fff',
    width:'30%',
    fontSize:13,
    color:'#000',
    fontWeight:'bold',
    textAlign:'center',
  },
  line: {
    width:'100%',
    height:'0%',
    position:'absolute',
    top:20,
    borderWidth: 0.5,
    borderColor: "gray",
  }
});