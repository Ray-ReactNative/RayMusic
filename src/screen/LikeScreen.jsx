import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';
import SongCard from '../components/SongCard';
import FloatingPlayer from '../components/FloatingPlayer';
import useLikeSongs from '../store/likeStore';
import {useNavigation, useTheme} from '@react-navigation/native';
import TrackPlayer from 'react-native-track-player';

const LikeScreen = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const {likedSongs, addToLiked} = useLikeSongs();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handlePlayTrack = async selectedTrack => {
    const songs = likedSongs;
    //make a queue amd play the songs
    const trackIndex = songs.findIndex(
      track => track.url === selectedTrack.url,
    );
    if (trackIndex === -1) {
      return;
    }
    const beforeTracks = songs.slice(0, trackIndex);
    const afterTracks = songs.slice(trackIndex + 1);

    await TrackPlayer.reset();
    await TrackPlayer.add(selectedTrack);
    await TrackPlayer.add(afterTracks);
    await TrackPlayer.add(beforeTracks);

    await TrackPlayer.play();
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign
            name={'arrowleft'}
            size={iconSizes.md}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Fontisto
            name={'equalizer'}
            size={iconSizes.sm}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
      </View>
      {/* render the list */}
      <Text style={[styles.headingText, {color: colors.textPrimary}]}>
        Liked Songs
      </Text>
      <FlatList
        // ListHeaderComponent={}   //title
        data={likedSongs}
        renderItem={({item}) => (
          <SongCard
            containerStyle={{width: '47%'}}
            imageStyle={{height: 160, width: 160}}
            item={item}
            handlePlay={selectedTrack => handlePlayTrack(selectedTrack)}
          />
        )}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 500,
          paddingHorizontal: spacing.lg,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginVertical: spacing.lg,
        }}
      />
      <FloatingPlayer />
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
  },
  headingText: {
    fontSize: fontSize.xl,

    fontFamily: fontFamilies.bold,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
});
