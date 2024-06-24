import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PlayerScreen</Text>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
