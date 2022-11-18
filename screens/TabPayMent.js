import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TabPayMent = () => {
  return (
    <View style={styles.container}>
      <Text>This is TabPayMent screen</Text>
    </View>
  )
}

export default TabPayMent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})