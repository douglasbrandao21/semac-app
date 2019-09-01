import React from 'react';
import { View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  flexbox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function FlexBox() {
  return <View style={style.flexbox} />;
}
