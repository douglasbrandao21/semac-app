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

const BlueToBlackBlueGradient = () => (
  <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={['#08AEEA', '#017EC1']}
    style={styles.gradientStyle}
  />
);

export default BlueToBlackBlueGradient;
