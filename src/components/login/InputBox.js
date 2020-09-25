import React from 'react';
import PropTypes from 'prop-types';

// components
import { StyleSheet, View, TextInput, Image } from 'react-native';


export default class InputBox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={this.props.source} 
          style={styles.img} 
        />
        <TextInput
          style={[styles.input, styles.font]}
          placeholder={this.props.placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

InputBox.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    marginBottom:'2%'
  },
  input: {
    height:'100%',
    borderRadius: 5,
    paddingLeft: '10%',
    backgroundColor: '#5D5D5D',
  },
  font: {
    fontSize:13,
  },
  img: {
    zIndex: 100,
    width: 22,
    height: 22,
    left: '2%',
    top: '25%',
    position:'absolute',
  },
});