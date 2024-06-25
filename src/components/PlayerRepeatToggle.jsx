import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {iconSizes} from '../constants/dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PlayerRepeatToggle = () => {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons
        name={'repeat'}
        size={iconSizes.md}
        color={colors.iconSecondary}
      />
    </TouchableOpacity>
  );
};

export default PlayerRepeatToggle;
