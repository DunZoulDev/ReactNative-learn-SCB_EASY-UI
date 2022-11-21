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
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MainHome from './TabsHomeScreen';
import TabBookBank from './TabBookBankScreen';
import TabPayMent from './TabPayMentScreen';
import TabNotification from './TabNotificationScreen';
import TabOtherMenus from './TabOtherMenusScreen';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Stack = createStackNavigator();
const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreenStack" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#693EAE',
        tabBarInactiveTintColor: '#C8C8C8',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: responsiveHeight(7),
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={MainHome}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{
                  width: responsiveWidth(5),
                  height: responsiveHeight(3),
                  tintColor: focused ? '#693EAE' : '#C8C8C8',
                }}
                source={require('./icon/icon_nav_home_02.png')}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="BookBank"
        component={TabBookBank}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{
                  width: responsiveWidth(6),
                  height: responsiveHeight(3.5),
                  tintColor: focused ? '#693EAE' : '#C8C8C8',
                }}
                source={require('./icon/icon_nav_bookbank_02.png')}
                resizeMode="contain"
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="PayMent"
        component={TabPayMent}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{
                  width: responsiveWidth(8),
                  height: responsiveHeight(4.5),
                  tintColor: focused ? '#693EAE' : '#C8C8C8',
                }}
                source={require('./icon/icon_nav_payment_02.png')}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Notification"
        component={TabNotification}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{
                  width: responsiveWidth(4),
                  height: responsiveHeight(3),
                  tintColor: focused ? '#693EAE' : '#C8C8C8',
                }}
                source={require('./icon/icon_nav_noti_02.png')}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="OtherMenus"
        component={TabOtherMenus}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{
                  width: responsiveWidth(5),
                  height: responsiveHeight(3.5),
                  tintColor: focused ? '#693EAE' : '#C8C8C8',
                }}
                source={require('./icon/icon_nav_other_02.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MainApp;

const styles = StyleSheet.create({});
