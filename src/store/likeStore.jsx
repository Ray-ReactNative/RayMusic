import {create} from 'zustand';
import {isSongExist} from '../utils';

// hooks, store
const useLikeSongs = create(set => ({
  likedSongs: [],
  addToLiked: newSong => {
    set(state => {
      // check that does already exists or not
      let isAlreadyExist = isSongExist(state.likedSongs, newSong);
      const updatedSongs = isAlreadyExist
        ? state.likedSongs
        : [newSong, ...state.likedSongs];
      return {
        likedSongs: updatedSongs,
      };
    });
  },
}));

export default useLikeSongs;
