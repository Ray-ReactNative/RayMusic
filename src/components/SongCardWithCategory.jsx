import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import SongCard from './SongCard';
import {fontSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fonts';
import TrackPlayer from 'react-native-track-player';

const SongCardWithCategory = ({item}) => {
  // create a function that will play a song in queue
  const handlePlayTrack = async selectedTrack => {
    const songs = item.songs;

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
    <View style={styles.container}>
      <Text style={styles.headingText}> {item.title} </Text>
      <FlatList
        data={item.songs}
        renderItem={({item}) => (
          <SongCard
            item={item}
            handlePlay={selectedTrack => {
              handlePlayTrack(selectedTrack);
            }}
          />
        )}
        horizontal
        ItemSeparatorComponent={<View style={{marginHorizontal: spacing.sm}} />} //the space between cards
        contentContainerStyle={{paddingHorizontal: spacing.lg}} // the space before first card
      />
    </View>
  );
};

export default SongCardWithCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    color: colors.textPrimary,
    fontSize: fontSize.xl,
    fontFamily: fontFamilies.bold,
    padding: spacing.lg,
  },
});
