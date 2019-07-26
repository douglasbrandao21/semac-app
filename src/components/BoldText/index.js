import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Montserrat-SemiBold',
  },
});

const NormalText = () => (
  <Text style={styles.textStyle} />
);

export default NormalText;
