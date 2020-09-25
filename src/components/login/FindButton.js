import React from 'react';

// Components
import { View,TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class FindButton extends React.Component {

  render() {
    return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={this.onPress}>
        <Text style={ styles.font}>비밀번호를 잊으셨나요?</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingTop:'3%',
  },
  button:{
    
  },
  font: {
    fontSize:12,
    color:'#000',
    fontWeight:'bold',
  }
});  