import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamilies} from '../constants/fonts';
import {fontSize, spacing} from '../constants/dimensions';
import {useSharedValue} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {formatSecondsToMinute} from '../utils';
import {useTheme} from '@react-navigation/native';

const PlayerProgressBar = () => {
  const {colors} = useTheme();
  const {duration, position} = useProgress();
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  const isSliding = useSharedValue(false);

  if (!isSliding.value) {
    progress.value = duration > 0 ? position / duration : 0;
  }
  const trackElapsedTime = formatSecondsToMinute(position);
  const trackRemainingTime = formatSecondsToMinute(duration - position);
  return (
    <View style={{paddingHorizontal: spacing.md}}>
      <View style={styles.timeRow}>
        <Text style={[styles.timeText, {color: colors.textPrimary}]}>
          {trackElapsedTime}
        </Text>
        <Text style={[styles.timeText, {color: colors.textPrimary}]}>
          {'-'}
          {trackRemainingTime}
        </Text>
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
        onSlidingStart={() => {
          isSliding.value = true;
        }}
        onValueChange={async value => {
          await TrackPlayer.seekTo(value * duration);
        }}
        onSlidingComplete={async value => {
          if (!isSliding) {
            return;
          }
          isSliding.value = false;
          await TrackPlayer.seekTo(value * duration);
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
