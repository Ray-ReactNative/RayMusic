import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import Header from '../components/Header';
import SongCardWithCategory from '../components/SongCardWithCategory';
import FloatingPlayer from '../components/FloatingPlayer';
import {songWithCategory} from '../data/songWithCategory';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <SongCard /> */}
      {/* <SongCardWithCategory /> */}

      <FlatList
        data={songWithCategory}
        renderItem={SongCardWithCategory}
        contentContainerStyle={{
          paddingBottom: 400, //下方空間
        }}
      />
      <FloatingPlayer />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
