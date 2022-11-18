import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TabOtherMenus = () => {
  return (
    <View style={styles.container}>
      <Text>This is OtherMenus screen</Text>
    </View>
  )
}

export default TabOtherMenus

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})