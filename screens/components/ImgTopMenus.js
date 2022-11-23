import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import {responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions"

const dimensions = Dimensions.get('window')
const imageHeight = Math.round((dimensions.width * 340) / 339)/3
  const imageWidth = dimensions.width/3.08

const  ImgTopMenus = () => {
    return (
        <View style={styles.containerStyle}>
          <Image source={require('../img/menu_top01.jpg')}style={styles.menuImgStyle}/>
          <Image source={require('../img/menu_top02.jpg')}style={styles.menuImgStyle}/>
          <Image source={require('../img/menu_top03.jpg')}style={styles.menuImgStyle}/>
          <Image source={require('../img/menu_top04.jpg')}style={styles.menuImgStyle}/>
          <Image source={require('../img/menu_top05.jpg')}style={styles.menuImgStyle}/>
          <Image source={require('../img/menu_top06.jpg')}style={styles.menuImgStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        flexWrap: "wrap",
      },
      menuImgStyle: {
        width: imageWidth ,
        height: imageHeight,
        marginTop: responsiveHeight(0.8),
      },
})

export default ImgTopMenus
