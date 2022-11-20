import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";


const TabNotification = () => {
  return (
    <View style={styles.container}>
      <Text>This is TabNotification screen</Text>
    </View>
  )
}

export default TabNotification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})