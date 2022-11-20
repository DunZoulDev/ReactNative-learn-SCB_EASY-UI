import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

class TopPayQrBar extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.bgStyle}>
          <View style={styles.containerScanEleStyle}>
            <Image
              source={require('../icon/icon_scan_01.png')}
              style={styles.IconStyle}
            />
            <Text style={styles.TextStyle}>สแกนจ่าย</Text>
          </View>

          <Image
            source={require('../icon/icon_line_01.png')}
            style={styles.IconStyle_line}
          />

          <View style={styles.containerQrEleStyle}>
            <Image
              source={require('../icon/icon_qr_01.png')}
              style={styles.IconStyle}
            />
            <Text style={styles.TextStyle}>QR ของฉัน</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  containerScanEleStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerQrEleStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777777',
    height: responsiveHeight(5),
    width: '100%',
  },
  IconStyle: {
    width: responsiveHeight(2.5),
    height: responsiveHeight(2.5),
  },
  IconStyle_line: {
    width: responsiveWidth(0.6),
    height: responsiveHeight(3),
  },
  TextStyle: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'Prompt-Light',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    marginLeft: responsiveWidth(1.5),
  },
});

export default TopPayQrBar;
