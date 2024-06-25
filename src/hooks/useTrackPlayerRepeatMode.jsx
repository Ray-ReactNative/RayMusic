import {useCallback, useEffect, useState} from 'react';
import TrackPlayer from 'react-native-track-player';

export const useTrackPlayerRepeatMode = () => {
  // repeatMoodeState
  const [repeatMode, setRepeatMode] = useState(null);

  // to change Repeat
  const changeRepeatMode = useCallback(async repeatMode => {
    await TrackPlayer.setRepeatMode(repeatMode); //track player
    setRepeatMode(repeatMode); // UI
  }, []);

  useEffect(() => {
    TrackPlayer.getRepeatMode().then(setRepeatMode);
  }, []);

  return {repeatMode, changeRepeatMode};
};
