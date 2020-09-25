import React from 'react';

// Components
import {StyleSheet, KeyboardAvoidingView } from 'react-native';
import InputBox from './InputBox';
import IdPwFindButton from '../../components/login/FindButton';
import LoginButton  from './LoginButton'

// Images
import id_icon from '../../images/id_icon.png'
import pw_icon from '../../images/pw_icon.png'

export default class LoginForm extends React.Component {

  
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <InputBox source={id_icon} placeholder="사용자 아이디 또는 이메일"/>
        <InputBox source={pw_icon} placeholder="비밀번호"/>
        <IdPwFindButton></IdPwFindButton>
        <LoginButton></LoginButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
