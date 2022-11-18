import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ImgListBanner = () => {
    return (
        <View>
            <Image source={require('./img/banner01.jpg')} style={styles.imagesbannerstyletop} />
            <Image source={require('./img/banner02.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner03.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner04.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner05.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner06.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner07.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner08.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner09.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner10.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner11.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner12.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner13.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner14.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner15.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner16.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner17.jpg')} style={styles.imagesbannerstyle} />
            <Image source={require('./img/banner18.jpg')} style={styles.imagesbannerstylebottom} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    imagesbannerstyle: {
        flex: 1,
        width: '100%',
        resizeMode: "contain",
        marginBottom: -136,
    },
    imagesbannerstyletop: {
        flex: 1,
        width: '100%',
        resizeMode: "contain",
        marginBottom: -136,
        marginTop: -148
    },
    imagesbannerstylebottom: {
        flex: 1,
        width: '100%',
        resizeMode: "contain",
        marginBottom: -75,
       
    }
    
});

export default ImgListBanner