import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fonts';
import {fontSize, spacing} from '../constants/dimensions';
import {useSharedValue} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';

const PlayerProgressBar = () => {
  const progress = useSharedValue(0.25);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  return (
    <View style={{paddingHorizontal: spacing.md}}>
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>00:50</Text>
        <Text style={styles.timeText}>{'-'}04:50</Text>
      </View>
      <Slider
        style={styles.sliderContainer}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        thumbWidth={18}
        renderBubble={() => null}
        containerStyle={styles.sliderContainerStyle}
        theme={{
          maximumTrackTintColor: colors.maximumTintColor,
          minimumTrackTintColor: colors.minimumTintColor,
        }}
      />
    </View>
  );
};

export default PlayerProgressBar;

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  timeText: {
    color: colors.textPrimary,
    fontFamily: fontFamilies.regular,
    fontSize: fontSize.sm,
    opacity: 0.75,
  },
  sliderContainer: {
    marginVertical: spacing.lg,
  },
  sliderContainerStyle: {
    height: 7,
    borderRadius: spacing.sm,
  },
});
