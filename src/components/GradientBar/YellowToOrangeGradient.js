import React from 'react';
import { StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  gradientStyle: {
    height: 2,
    width: 100,
    marginTop: 10,
    marginBottom: 10,
  },
});

const YellowToOrangeGradient = () => (
  <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={['#FEE140', '#FF6700']}
    style={styles.gradientStyle}
  />
);

export default YellowToOrangeGradient;
