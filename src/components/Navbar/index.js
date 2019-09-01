import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Logo } from './styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#0C0A17',

    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 23,
  },
});

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Logo source={require('~/assets/images/entire_green.png')} />
    </View>
  );
}
