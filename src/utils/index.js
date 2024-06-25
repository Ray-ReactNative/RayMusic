export const formatSecondsToMinute = seconds => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 10);

  const formatedMinutes = String(minutes).padStart(2, '0');
  const formatedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formatedMinutes}:${formatedSeconds}`;
};

export const isSongExist = (songs, track) => {
  return songs.some(song => song.url === track.url);
};
