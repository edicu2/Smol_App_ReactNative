import React, {Component} from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Image samples
import img0 from '../../images/home_img0.jpeg'
import img1 from '../../images/home_img1.jpeg'
import img2 from '../../images/home_img2.jpeg'
import img3 from '../../images/home_img3.jpeg'

export default class HomeScreen extends Component{
    
      
    render(){
        const imgs = [img0, img1, img2, img3];
        const List = imgs.map((img,index) => (
            <View key={index} style={styles.wrapContent}>
                <Image source={img} style={styles.content} />
            </View>));

        return (
            <ScrollView style={styles.container}>
              {List}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapContent: {
        width: '100%',
        height: wp('100%'),
        marginBottom: wp('5%'),        
    },
    content: {
        width:'100%',
        height:'100%',
        justifyContent:'center',
        resizeMode:'cover',
        backgroundColor: "blue",
    }
})