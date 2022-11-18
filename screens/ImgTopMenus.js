import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const  ImgTopMenus = () => {
    return (
        <View style={styles.container}>
          <Image source={require('./img/menu_top01.jpg')}style={styles.menutop}/>
          <Image source={require('./img/menu_top02.jpg')}style={styles.menutop}/>
          <Image source={require('./img/menu_top03.jpg')}style={styles.menutop}/>
          <Image source={require('./img/menu_top04.jpg')}style={styles.menutop_under}/>
          <Image source={require('./img/menu_top05.jpg')}style={styles.menutop_under}/>
          <Image source={require('./img/menu_top06.jpg')}style={styles.menutop_under}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        height:260,
        marginBottom:83,
        marginTop:-82,
        flexWrap: "wrap",
      },
      menutop: {
        width: '32.5%',
        resizeMode: 'contain',
        marginTop:-105,
      },
      menutop_under: {
        width: '32.5%',
        resizeMode: 'contain',
        marginTop:-208,
      },
});

export default ImgTopMenus
