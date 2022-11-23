import { Text, View, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions"
const dimensions = Dimensions.get('window')
const imageHeight = Math.round((dimensions.width * 314) / 820)
const imageWidth = dimensions.width


const TopProfileHome = () => {
  const name = 'ดุลยวิชญ์'
  const location = 'กรุงเทพมหานคร'

  return (
    <View style={styles.containerStyle}>
      <ImageBackground
        source={require('../img/backgroundtopprofile.jpg')}
        style={styles.bgImgStyle}>
        <View style={styles.containerRowStyle}>
          <Image
            source={require('../img/profileimg.png')}
            style={styles.profileImgStyle}
          />
          <View style={{ marginTop: responsiveHeight(3.5) }}>
            <Text style={styles.headerTextStyle}>สวัสดี</Text>
            <Text style={styles.ligthTextStyle}>{name}</Text>
            <View style={styles.containerLocationStyle}>
              <Image
                source={require('../icon/icon_location_01.png')}
                style={styles.locationIconStyle}
              />
              <Text style={styles.ligthTextStyle}>{location}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  containerRowStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
  },
  containerLocationStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: responsiveHeight(0.5),
  },
  bgImgStyle: {
    flex: 1,
    width: imageWidth,
    height: imageHeight,
  },
  profileImgStyle: {
    width: responsiveHeight(12),
    height: responsiveHeight(12),
    justifyContent: 'center',
    margin: responsiveHeight(4),
  },
  locationIconStyle: {
    width: responsiveHeight(2),
    height: responsiveHeight(2),
    marginTop: responsiveHeight(0.8),
  },
  ligthTextStyle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Prompt-Light',
    color: 'black',
  },
  headerTextStyle: {
    fontSize: responsiveFontSize(2.7),
    fontFamily: 'Prompt-Regular',
    marginBottom: responsiveHeight(0.8),
    color: 'black',
  },
})

export default TopProfileHome
