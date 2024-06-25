import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import SongCard from './SongCard';
import {fontSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fonts';

const SongCardWithCategory = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}> {item.title} </Text>
      <FlatList
        data={item.song}
        renderItem={SongCard}
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
