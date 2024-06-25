import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {iconSizes} from '../constants/dimensions';
import {colors} from '../constants/colors';
import TrackPlayer, {useIsPlaying} from 'react-native-track-player';

export const GoPreviousButton = ({size = iconSizes.xl}) => {
  const handleGoPrevious = () => {
    TrackPlayer.skipToPrevious();
  };
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={handleGoPrevious}>
      <MaterialCommunityIcons
        name={'skip-previous-outline'}
        color={colors.iconPrimary}
        size={size}
      />
    </TouchableOpacity>
  );
};
export const PlayPauseButton = ({size = iconSizes.lg}) => {
  // const isPlaying = true;
  const {playing} = useIsPlaying();

  const handleTogglePlay = () => {
    if (playing) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={handleTogglePlay}>
      <MaterialCommunityIcons
        name={playing ? 'pause' : 'play'}
        color={colors.iconPrimary}
        size={size}
      />
    </TouchableOpacity>
  );
};
export const GoNextButton = ({size = iconSizes.xl}) => {
  const handleGoNext = () => {
    TrackPlayer.skipToNext();
  };
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={handleGoNext}>
      <MaterialCommunityIcons
        name={'skip-next-outline'}
        color={colors.iconPrimary}
        size={size}
      />
    </TouchableOpacity>
  );
};
