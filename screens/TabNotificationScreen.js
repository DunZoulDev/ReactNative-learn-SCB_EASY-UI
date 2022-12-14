import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions"


const TabNotification = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.TextStyle}>This is Notification screen</Text>
    </View>
  )
}

export default TabNotification

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    fontSize: responsiveFontSize(1.3),
  },
})