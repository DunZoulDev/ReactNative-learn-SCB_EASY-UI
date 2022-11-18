import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  PixelRatio, 
} from 'react-native';
import React from 'react';
import {useState, useRef} from 'react';
import TopProfileHome from './TopProfileHome';
import TopPayQrBar from './TopPayQrBar';
import ImgTopMenus from './ImgTopMenus';
import ImgListBanner from './ImgListBanner';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import TabBookBank from './TabBookBank';
import TabPayMent from './TabPayMent';
import TabNotification from './TabNotification';
import TabOtherMenus from './TabOtherMenus';

const MainHome = () => {
  return (
    <View>
      <ScrollView>
        <TopProfileHome />
        <TopPayQrBar />
        <ImgTopMenus />
        <ImgListBanner />
        <Text style={styles.textbottom}>
          อ่านวิธีที่เราเก็บรวบรวม ใช้ เปิดเผยข้อมูลส่วนบุคคล
          และเข้าใจสิทธิของคุณ{'\n'}ที่
          <Text style={{alignSelf: 'center', textDecorationLine: 'underline'}}>
            ประกาศนโยบายความเป็นส่วนตัว
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default MainHome;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  textbottom: {
    fontSize: 11,
    textAlign: 'center',
    margin: 20,
    marginBottom: 10,
    fontFamily: 'Prompt-Regular',
    color: 'black',
  },
  viewImage: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
