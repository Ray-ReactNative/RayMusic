import {StyleSheet, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {useSetupPlayer} from './src/hooks/useSetupTrack';
import useLikeSongs from './src/store/likeStore';
import {darkTheme} from './src/theme/darkTheme';
import {lightTheme} from './src/theme/lightTheme';
import {useThemeStore} from './src/store/themeStore';

const App = () => {
  const scheme = useColorScheme(); //設備背景色
  console.log('scheme', scheme);
  const {isDarkMode, toggleTheme} = useThemeStore();
  console.log('isDarkMode: ', isDarkMode);
  const {loadLikeSongs} = useLikeSongs();
  useEffect(() => {
    loadLikeSongs(); // async storage
    scheme === 'light' ? toggleTheme(false) : toggleTheme(true);
    console.log('isDarkMode2: ', isDarkMode);
  }, [scheme]);

  // track player setup
  const onLoad = () => {
    console.log('track player setup...');
  };
  useSetupPlayer({onLoad});
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
        {/* <StackNavigation /> */}
        <DrawerNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
