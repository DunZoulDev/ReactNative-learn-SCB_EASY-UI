import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
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
import MainHome from './TabsHome';
import TabBookBank from './TabBookBank';
import TabPayMent from './TabPayMent';
import TabNotification from './TabNotification';
import TabOtherMenus from './TabOtherMenus';

const Stack = createStackNavigator();
const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();
function BottomTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        tabBarShowLabel: false,
        inactiveTintColor: '#C8C8C8',
        activeTintColor: '#693EAE',
      }}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={MainHome} options={{
        tabBarIcon: ({size,focused,color}) => {
          return (
            <Image
              style={{ width: 20, height: 20, tintColor: focused ? '#693EAE':'#C8C8C8',}}
              source={require('./icon/icon_nav_home_02.png')}
            />
          );
        }
      }} />

      <Tab.Screen name="BookBank" component={TabBookBank} options={{
        tabBarIcon: ({size,focused,color}) => {
          return (
            <Image
              style={{ width: 23, height: 30, tintColor: focused ? '#693EAE':'#C8C8C8',}}
              source={require('./icon/icon_nav_bookbank_02.png')}
              resizeMode='contain'
            />
          );
        }
      }} />

      <Tab.Screen name="PayMent" component={TabPayMent} options={{
        tabBarIcon: ({size,focused,color}) => {
          return (
            <Image
              style={{ width: 27, height: 27, tintColor: focused ? '#693EAE':'#C8C8C8',}}
              source={require('./icon/icon_nav_payment_02.png')}
            />
          );
        }
      }} />

      <Tab.Screen name="Notification" component={TabNotification} options={{
        tabBarIcon: ({size,focused,color}) => {
          return (
            <Image
              style={{ width: 17, height: 17, tintColor: focused ? '#693EAE':'#C8C8C8',}}
              source={require('./icon/icon_nav_noti_02.png')}
            />
          );
        }
      }}/>

      <Tab.Screen name="OtherMenus" component={TabOtherMenus} options={{
        tabBarIcon: ({size,focused,color}) => {
          return (
            <Image
              style={{ width: 17, height: 17, tintColor: focused ? '#693EAE':'#C8C8C8',}}
              source={require('./icon/icon_nav_other_02.png')}
            />
          );
        }
      }} />
    </Tab.Navigator>
  );
}

export default MainApp;

const styles = StyleSheet.create({});
