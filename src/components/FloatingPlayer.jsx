import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import {colors} from '../constants/colors';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';

import {
  GoNextButton,
  GoPreviiousButton,
  PlayPauseButton,
} from './PlayerControls';
import {Slider} from 'react-native-awesome-slider';
const imgUrl =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/701/325x325/nostalgia-1718323267-zWVQ91T49m.jpg';
const FloatingPlayer = () => {
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(100);
  return (
    <View>
      <View style={{zIndex: 1}}>
        <Slider
          style={styles.container}
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          theme={{
            minimumTrackTintColor: colors.minimumTintColor,
            maximumTrackTintColor: colors.maximumTintColor,
          }}
          renderBubble={() => (
            //點擊球 所顯示的內容
            <View>{/* <Text> bubble text </Text> */}</View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.container} activeOpacity={0.65}>
        <Image source={{uri: imgUrl}} style={styles.coverImage} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Nostalgia </Text>
          <Text style={styles.artist}> Johnning, Janji</Text>
        </View>
        <View style={styles.playerControlContainer}>
          <GoPreviiousButton />
          <PlayPauseButton />
          <GoNextButton />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  coverImage: {height: 60, width: 60, resizeMode: 'cover'},
  titleContainer: {
    flex: 1,
    paddingHorizontal: spacing.sm,
  },
  title: {
    color: colors.textPrimary,
    fontSize: fontSize.lg,
    fontFamily: fontFamilies.medium,
  },
  artist: {
    color: colors.textSecondary,
    fontSize: fontSize.md,
    fontFamilies: fontFamilies.regular,
  },
  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 5,
    paddingRight: spacing.md,
  },
});