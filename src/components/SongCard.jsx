import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fonts';
import {fontSize, spacing} from '../constants/dimensions';

const imgUrl =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/688/850x850/1717149481_ZQIuzR0KYO_PUSHING-ON---Final.jpg';
const SongCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: imgUrl}} style={styles.coverImage} />
      <Text style={styles.title}>Pushing On</Text>
      <Text style={styles.artist}>RIOT</Text>
    </TouchableOpacity>
  );
};

export default SongCard;

const styles = StyleSheet.create({
  container: {
    height: 330,
    width: 250,
  },
  coverImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: fontFamilies.medium,
    fontSize: fontSize.lg,
    textAlign: 'center',
    paddingVertical: spacing.sm,
  },
  artist: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
