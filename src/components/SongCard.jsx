import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {fontFamilies} from '../constants/fonts';
import {fontSize, spacing} from '../constants/dimensions';
import {useTheme} from '@react-navigation/native';

const SongCard = ({item, containerStyle, imageStyle, handlePlay}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => handlePlay(item)}>
      <Image
        source={{uri: item.artwork}}
        style={[styles.coverImage, imageStyle]}
      />
      <Text
        style={[styles.title, {color: colors.textPrimary}]}
        numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={[styles.artist, {color: colors.textSecondary}]}>
        {item.artist}
      </Text>
    </TouchableOpacity>
  );
};

export default SongCard;

const styles = StyleSheet.create({
  container: {
    // height: 270,
    width: 270,
  },
  coverImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontFamily: fontFamilies.medium,
    fontSize: fontSize.lg,
    textAlign: 'center',
    paddingVertical: spacing.sm,
  },
  artist: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSize.md,
    textAlign: 'center',
  },
});
