import React, { Component } from 'react';
// Components
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

//redux 
import { connect } from 'react-redux';
import actions from '../../actions';

class LoginButton extends Component{
  // _doLogin(){
  //   this.props.navigation.replace('TabNavigator')
  // }
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{this.props.navigation.replace('TabNavigator')}} style={styles.button} activeOpacity={0.5}>
          <Text style={[styles.font]}>로그인</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginBottom:'2%',
  },
  button: {
    height:'100%',
    borderRadius:7,
    alignContent:'center',
    justifyContent:'center',    
    backgroundColor: '#3f729b',
  },
  font: {
    color:'#fff',
    fontSize: 13,
    fontWeight:'bold',
    textAlign:'center',
  },
});

function mapStateToProps(state) {
  return {
    count: state.cntReducer.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    LoginCheck:() => {
      console.log('Login_btn Click')
      dispatch(actions.increaseCount());
      this._doLogin
    },
    updateSecond:(num) => {
      // dispatch(ActionCreator.updateSumValueSecond(num));
    }  
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(LoginButton))