import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
// import {colors} from '../constants/colors';
import Header from '../components/Header';
import SongCardWithCategory from '../components/SongCardWithCategory';
import FloatingPlayer from '../components/FloatingPlayer';
import {songWithCategory} from '../data/songWithCategory';
import {useTheme} from '@react-navigation/native';

const HomeScreen = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Header />

      <FlatList
        data={songWithCategory}
        renderItem={({item}) => <SongCardWithCategory item={item} />} //using hook in the page, need to render as react component
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
    // backgroundColor: colors.background,
  },
});
