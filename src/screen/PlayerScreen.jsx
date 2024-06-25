import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';
import PlayerRepeatToggle from '../components/PlayerRepeatToggle';
import PlayerShuffleToggle from '../components/PlayerShuffleToggle';
import PlayerProgressBar from '../components/PlayerProgressBar';
import {
  GoNextButton,
  GoPreviousButton,
  PlayPauseButton,
} from '../components/PlayerControls';
import TrackPlayer, {useActiveTrack} from 'react-native-track-player';
import {useNavigation} from '@react-navigation/native';

const PlayerScreen = () => {
  const activeTrack = useActiveTrack();
  console.log('activeTrack:', activeTrack);
  const isLiked = false;
  const [isMute, setIsMute] = useState(false);

  useEffect(() => {
    setVolume();
  }, []);
  const setVolume = async () => {
    const volume = await TrackPlayer.getVolume();
    setIsMute(volume === 0 ? true : false);
  };

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  if (!activeTrack) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size={'small'} color={colors.iconPrimary} />
      </View>
    );
  }
  const haandleToggleVolume = () => {
    TrackPlayer.setVolume(isMute ? 1 : 0);
    setIsMute(!isMute);
  };
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign
            name={'arrowleft'}
            size={iconSizes.md}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
        <Text style={styles.headingText}> Playing Now</Text>
      </View>
      {/* image */}
      <View style={styles.coverImageContainer}>
        <Image
          source={{uri: activeTrack.artwork}}
          resizeMode="contain"
          style={styles.coverImage}
        />
      </View>
      {/* render the title and artist */}
      <View style={styles.titleRowHeartContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{activeTrack.title}</Text>
          <Text style={styles.artist}>{activeTrack.artist}</Text>
        </View>
        <TouchableOpacity>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={iconSizes.md}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
      </View>
      {/* player control */}
      <View style={styles.playerControlContainer}>
        <TouchableOpacity
          style={styles.volumeWrapper}
          onPress={haandleToggleVolume}>
          <MaterialCommunityIcons
            name={isMute ? 'volume-mute' : 'volume-medium'}
            size={iconSizes.lg}
            color={colors.iconSecondary}
          />
        </TouchableOpacity>
        <View style={styles.repeatShuffleWrapper}>
          <PlayerRepeatToggle />
          <PlayerShuffleToggle />
        </View>
      </View>
      {/* Player progress bar */}
      <PlayerProgressBar />
      <View style={styles.PlayPauseContainer}>
        <GoPreviousButton iconSizes={iconSizes.xl} />
        <PlayPauseButton iconSizes={iconSizes.xl} />
        <GoNextButton iconSizes={iconSizes.xl} />
      </View>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // padding: spacing.lg,  //not work when it's safeareaview
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
  },
  headingText: {
    color: colors.textPrimary,
    fontFamily: fontFamilies.medium,
    fontSize: fontSize.lg,
    textAlign: 'center',
    flex: 1,
  },
  coverImageContainer: {
    flex: 2,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImage: {
    height: 250,
    width: 250,
    borderRadius: 5,
  },
  titleRowHeartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    padding: spacing.md,
  },
  title: {
    fontSize: fontSize.xl,
    color: colors.textPrimary,
    fontFamily: fontFamilies.medium,
  },
  artist: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
  },
  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  volumeWrapper: {},
  repeatShuffleWrapper: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  PlayPauseContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xl,
    marginTop: spacing.lg,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});
