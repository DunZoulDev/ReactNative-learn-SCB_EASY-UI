import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import React, {Component} from 'react';

const TopProfileHome = () => {
  const name = 'ดุลยวิชญ์';
  const location = 'กรุงเทพมหานคร';

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./img/backgroundtopprofile.jpg')}
        resizeMode="contain"
        style={styles.imagesbackgroundtop}>
        <View style={styles.containerRow}>
          <Image
            source={require('./img/profileimg.png')}
            style={styles.profileImg}
          />
          <View style={{marginTop: 25}}>
            <Text style={styles.FontHeader}>สวัสดี</Text>
            <Text style={styles.FontMedium}>{name}</Text>
            <View style={styles.containerCol}>
              <Image
                source={require('./icon/icon_location_01.png')}
                style={styles.IconLocation}
              />
              <Text style={styles.FontMedium}>{location}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 232,
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 95,
    height: 100,
  },
  containerCol: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
  imagesbackgroundtop: {
    flex: 1,
    width: '100%',
    marginBottom: 0,
    marginTop: -82,
  },
  profileImg: {
    width: 90,
    height: 90,
    margin: 25,
  },
  IconLocation: {
    width: 12,
    height: 12,
    marginTop: 6,
  },
  FontMedium: {
    fontSize: 15,
    fontFamily: 'Prompt-Light',
    color: 'black',
  },
  FontHeader: {
    fontSize: 22,
    fontFamily: 'Prompt-Regular',
    marginBottom: 4,
    color: 'black',
  },
});

export default TopProfileHome;
