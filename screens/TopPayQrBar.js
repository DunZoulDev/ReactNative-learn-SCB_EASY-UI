import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

class TopPayQrBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.payment_qr_bar}>
          <View style={styles.containerElement_scan}>
            <Image
              source={require('./icon/icon_scan_01.png')}
              style={styles.IconStyle}
            />
            <Text style={styles.TextStyle}>สแกนจ่าย</Text>
          </View>

          <Image
            source={require('./icon/icon_line_01.png')}
            style={styles.IconStyle_line}
          />

          <View style={styles.containerElement_qr}>
            <Image
              source={require('./icon/icon_qr_01.png')}
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
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  containerElement_scan: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerElement_qr: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  payment_qr_bar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777777',
    height: 40,
    width: '100%',
    marginBottom: 85,
    marginTop: -81.5,
  },
  IconStyle: {
    width: 18,
    height: 18,
    marginTop: 0,
  },
  IconStyle_line: {
    width: 2.5,
    height: 20,
    marginTop: 0,
  },
  TextStyle: {
    fontSize: 14,
    fontFamily: 'Prompt-Light',
    textAlign: 'center',
    color: 'white',
    marginLeft: 10,
  },
});

export default TopPayQrBar;
