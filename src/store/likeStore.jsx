import {create} from 'zustand';
import {isSongExist} from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

// hooks, store
const useLikeSongs = create(set => ({
  likedSongs: [],
  addToLiked: async newSong => {
    set(state => {
      // check that does already exists or not
      let isAlreadyLiked = isSongExist(state.likedSongs, newSong);
      const updatedSongs = isAlreadyLiked
        ? state.likedSongs.filter(item => item.url !== newSong.url)
        : [newSong, ...state.likedSongs];

      AsyncStorage.setItem('likedSongs', JSON.stringify(updatedSongs));
      return {
        likedSongs: updatedSongs,
      };
    });
  },
  loadLikeSongs: async () => {
    try {
      const likedSongs = await AsyncStorage.getItem('likedSongs');
      if (likedSongs) {
        set({likedSongs: JSON.parse(likedSongs)});
      }
    } catch (error) {}
  },
}));

export default useLikeSongs;
