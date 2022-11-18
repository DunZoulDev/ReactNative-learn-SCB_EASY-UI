import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TabBookBank = () => {
  return (
    <View style={styles.container}>
      <Text>This is BookBank screen</Text>
    </View>
  )
}

export default TabBookBank

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})