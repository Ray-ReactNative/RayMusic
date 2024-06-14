import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {iconSizes} from '../constants/dimensions';
import {colors} from '../constants/colors';

export const GoPreviiousButton = ({size = iconSizes.xl}) => {
  return (
    <TouchableOpacity activeOpacity={0.75}>
      <MaterialCommunityIcons
        name={'skip-previous-outline'}
        color={colors.iconPrimary}
        size={size}
      />
    </TouchableOpacity>
  );
};
export const PlayPauseButton = ({size = iconSizes.lg}) => {
  const isPlaying = true;
  return (
    <TouchableOpacity activeOpacity={0.75}>
      <MaterialCommunityIcons
        name={isPlaying ? 'pause' : 'play'}
        color={colors.iconPrimary}
        size={size}
      />
    </TouchableOpacity>
  );
};
export const GoNextButton = ({size = iconSizes.xl}) => {
  return (
    <TouchableOpacity activeOpacity={0.75}>
      <MaterialCommunityIcons
        name={'skip-next-outline'}
        color={colors.iconPrimary}
        size={size}
      />
    </TouchableOpacity>
  );
};
