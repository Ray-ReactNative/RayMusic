import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {useSetupPlayer} from './src/hooks/useSetupTrack';
import useLikeSongs from './src/store/likeStore';

const App = () => {
  const {loadLikeSongs} = useLikeSongs();
  useEffect(() => {
    loadLikeSongs(); // async storage
  }, []);

  // track player setup
  const onLoad = () => {
    console.log('track player setup...');
  };
  useSetupPlayer({onLoad});
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        {/* <StackNavigation /> */}
        <DrawerNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
