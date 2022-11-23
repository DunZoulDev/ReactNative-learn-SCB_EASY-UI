import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth, responsiveFontSize, } from 'react-native-responsive-dimensions'

const dimensions = Dimensions.get('window')
const imageHeight = Math.round((dimensions.width * 268) / 821)
const imageWidth = dimensions.width

const ImgListBanner = () => {
  return (
    <View style={styles.containerStyle}>
      <Image
        source={require('../img/banner01.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner02.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner03.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner04.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner05.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner06.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner07.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner08.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner09.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner10.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner11.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner12.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner13.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner14.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner15.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner16.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner17.jpg')}
        style={styles.imagesbannerstyle}
      />
      <Image
        source={require('../img/banner18.jpg')}
        style={styles.imagesbannerstyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  imagesbannerstyle: {
    height: imageHeight,
    width: imageWidth,
    marginTop: responsiveHeight(0.7),
  },
})

export default ImgListBanner
