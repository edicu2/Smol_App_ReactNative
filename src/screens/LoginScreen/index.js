import React, {Component} from 'react';

// Components
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from '../../components/login/Logo'
import LoginForm from '../../components/login/LoginForm';
import SocialTitle from  '../../components/login/SocialTitle';


class LoginScreen extends Component{
    
    static navigationOptions = {
        headerShown: false,
    };

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>

                <View style={styles.body}>
                    <View style={style=styles.body_empty}></View>

                    <View style={styles.body_logo}>
                        <Logo></Logo>
                    </View>

                    <View style={styles.body_form}>
                        <LoginForm></LoginForm>
                    </View>

                    <View style={styles.body_socical}>
                        <SocialTitle></SocialTitle>
                        <View style={{flex:4}}>
                            {/* socical Login 들어갈 자리 */}
                        </View>
                    </View>

                    <View style={style=styles.body_empty}></View>
                </View>

                <View style={styles.footer}></View>
                {console.log(this.props.navi)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
 
    container:{ flex:1, backgroundColor:'#fff'},  
                           // container flex 10
    header:   { flex:1 },  //  flex 1 
    body :    { flex:8, paddingHorizontal: wp('4%')},  
                           //  flex 8
    footer:   { flex:1 },  //  flex 1

                              // body flex 10
    body_empty:  { flex:1 },  // flex 1*2 = 2
    body_logo:   { flex:2 },  // flex 2
    body_form:   { flex:3 }, // flex 3.5
    body_socical:{ flex:3 }, // flex 2.5
})

export default LoginScreen