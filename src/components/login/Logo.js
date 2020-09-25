import React from 'react';
// components
import { View, Image, StyleSheet } from 'react-native';

// image
import smol_logo from '../../images/smol_logo.png';

export default class Logo extends React.Component {

    render() {
      return (
        <View style={styles.container}> 
          <Image source={smol_logo} style={styles.logo}/>        
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    logo: {
      height:'50%',
      width:'90%'
    }
});  