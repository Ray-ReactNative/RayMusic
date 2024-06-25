import {TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {iconSizes} from '../constants/dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTrackPlayerRepeatMode} from '../hooks/useTrackPlayerRepeatMode';
import {RepeatMode} from 'react-native-track-player';

const repeatOrder = [RepeatMode.Off, RepeatMode.Track, RepeatMode.Queue]; //repeatOrder.indexOf : [0, 1, 2]

const PlayerRepeatToggle = () => {
  const {repeatMode, changeRepeatMode} = useTrackPlayerRepeatMode();
  const toggleRepeatMode = () => {
    if (repeatMode == null) {
      return;
    }
    const currentIndex = repeatOrder.indexOf(repeatMode);
    const nextIndex = (currentIndex + 1) % repeatOrder.length;
    changeRepeatMode(nextIndex);
  };
  let iconName = 'repeat';
  switch (repeatMode) {
    case RepeatMode.Off:
      iconName = 'repeat-off';
      break;
    case RepeatMode.Queue:
      iconName = 'repeat';
      break;
    case RepeatMode.Track:
      iconName = 'repeat-once';
      break;
  }
  return (
    <TouchableOpacity onPress={toggleRepeatMode}>
      <MaterialCommunityIcons
        name={iconName}
        size={iconSizes.md}
        color={colors.iconSecondary}
      />
    </TouchableOpacity>
  );
};

export default PlayerRepeatToggle;
