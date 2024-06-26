import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Slider} from 'react-native-awesome-slider';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';

import {
  GoNextButton,
  GoPreviousButton,
  PlayPauseButton,
} from './PlayerControls';
import MovingText from './MovingText';

import TrackPlayer, {
  useActiveTrack,
  useProgress,
} from 'react-native-track-player';

const imgUrl =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/701/325x325/nostalgia-1718323267-zWVQ91T49m.jpg';
const FloatingPlayer = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  //slider
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(100);
  //track player
  const activeTrack = useActiveTrack();
  const {duration, position} = useProgress();

  const isSliding = useSharedValue(false);
  if (!isSliding.value) {
    progress.value = duration > 0 ? position / duration : 0;
  }
  if (!activeTrack) {
    return null;
  }

  const handleOpenPlayerScreen = () => {
    navigation.navigate('PLAYER_SCREEN');
  };
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
          onSlidingStart={() => (isSliding.value = true)}
          onValueChange={async value => {
            await TrackPlayer.seekTo(value * duration);
          }}
          onSlidingComplete={async value => {
            if (!isSliding.value) {
              return;
            }
            isSliding.value = false;
            await TrackPlayer.seekTo(value * duration);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.65}
        onPress={handleOpenPlayerScreen}>
        <Image source={{uri: activeTrack.artwork}} style={styles.coverImage} />
        <View style={styles.titleContainer}>
          <MovingText
            text={activeTrack.title}
            style={[styles.title, {color: colors.textPrimary}]}
            animationThreshold={15}
          />
          {/* <Text style={styles.title}> Nostalgia </Text> */}
          <Text style={[styles.artist, {color: colors.textSecondary}]}>
            {activeTrack.artist}
          </Text>
        </View>
        <View style={styles.playerControlContainer}>
          <GoPreviousButton size={iconSizes.lg} />
          <PlayPauseButton size={iconSizes.lg} />
          <GoNextButton size={iconSizes.lg} />
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
    overflow: 'hidden',
  },
  title: {
    fontSize: fontSize.lg,
    fontFamily: fontFamilies.medium,
    // marginLeft: spacing.sm,
    marginRight: spacing.lg,
  },
  artist: {
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
