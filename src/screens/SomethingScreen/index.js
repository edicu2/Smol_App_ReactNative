import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
export default class SomethingScreen extends Component{

    static navigationOptions = {
        headerTitle : 'Something'
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.font}>something</Text>
                <Text style={styles.font}></Text>
                <Text style={styles.font}>Page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    font: {
        fontSize:20,
        fontWeight:'bold',
    }
})