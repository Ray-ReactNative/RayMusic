import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {iconSizes} from '../constants/dimensions';
import TrackPlayer, {useIsPlaying} from 'react-native-track-player';
import {useTheme} from '@react-navigation/native';

export const GoPreviousButton = ({size = iconSizes.xl}) => {
  const {colors} = useTheme();
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
  const {colors} = useTheme();
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
  const {colors} = useTheme();
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
