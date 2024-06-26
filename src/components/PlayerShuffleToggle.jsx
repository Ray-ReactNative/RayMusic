import {TouchableOpacity} from 'react-native';
import React from 'react';
import {iconSizes} from '../constants/dimensions';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer from 'react-native-track-player';
import {useTheme} from '@react-navigation/native';

const PlayerShuffleToggle = () => {
  const {colors} = useTheme();
  const shuffleSongs = async songs => {
    let queue = await TrackPlayer.getQueue();
    await TrackPlayer.reset();
    queue.sort(() => Math.random() - 0.5);
    await TrackPlayer.add(queue);
    await TrackPlayer.play();
  };
  return (
    <TouchableOpacity onPress={shuffleSongs}>
      <MaterialCommunityIcons
        name={'shuffle'}
        size={iconSizes.md}
        color={colors.iconSecondary}
      />
    </TouchableOpacity>
  );
};

export default PlayerShuffleToggle;
