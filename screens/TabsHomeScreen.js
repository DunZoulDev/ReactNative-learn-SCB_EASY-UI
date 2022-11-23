import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  PixelRatio,
} from 'react-native'
import React from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions'
import {useState, useRef} from 'react'
import TopProfileHome from './components/TopProfileHome'
import TopPayQrBar from './components/TopPayQrBar'
import ImgTopMenus from './components/ImgTopMenus'
import ImgListBanner from './components/ImgListBanner'

const MainHome = () => {
  return (
    <View>
      <ScrollView>
        <TopProfileHome />
        <TopPayQrBar />
        <ImgTopMenus />
        <ImgListBanner />
        <Text style={styles.lightTextStyle}>
          อ่านวิธีที่เราเก็บรวบรวม ใช้ เปิดเผยข้อมูลส่วนบุคคล
          และเข้าใจสิทธิของคุณ{'\n'}ที่
          <Text style={styles.underlineTextStyle}>
            ประกาศนโยบายความเป็นส่วนตัว
          </Text>
        </Text>
      </ScrollView>
    </View>
  )
}

export default MainHome

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  lightTextStyle: {
    fontSize: responsiveFontSize(1.3),
    textAlign: 'center',
    margin: responsiveHeight(2),
    marginBottom: responsiveHeight(3),
    fontFamily: 'Prompt-Regular',
    color: 'black',
  },
  underlineTextStyle: {
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
})
