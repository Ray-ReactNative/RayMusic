import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';
import {useTheme} from '@react-navigation/native';
import {useThemeStore} from '../store/themeStore';

export default function CustomDrawerContainer(props) {
  const {isDarkMode, toggleTheme} = useThemeStore();

  const {colors} = useTheme();
  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };
  return (
    <DrawerContentScrollView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.headerIconContainer}>
        <TouchableOpacity onPress={toggleDrawer}>
          <AntDesign
            name={'close'}
            color={colors.iconPrimary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleTheme()}>
          <Octicons
            name={isDarkMode ? 'sun' : 'moon'}
            color={colors.iconPrimary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
      </View>
      {/* menu item container */}
      <View style={styles.drawerItemContainer}>
        <DrawerItem
          label={'Profile'}
          icon={() => (
            <AntDesign
              name={'user'}
              size={iconSizes.md}
              color={colors.iconSecondary}
            />
          )}
          labelStyle={[styles.lableStyle, {color: colors.textSecondary}]}
          style={styles.drawerItem}
        />
        <DrawerItem
          label={'Liked Song'}
          icon={() => (
            <AntDesign
              name={'hearto'}
              size={iconSizes.md}
              color={colors.iconSecondary}
            />
          )}
          labelStyle={[styles.lableStyle, {color: colors.textSecondary}]}
          style={styles.drawerItem}
          onPress={() => {
            props.navigation.navigate('LIKE_SCREEN');
          }}
        />
        <DrawerItem
          label={'Language'}
          icon={() => (
            <AntDesign
              name={'earth'}
              size={iconSizes.md}
              color={colors.iconSecondary}
            />
          )}
          labelStyle={[styles.lableStyle, {color: colors.textSecondary}]}
          style={styles.drawerItem}
        />
        <DrawerItem
          label={'Contact us'}
          icon={() => (
            <AntDesign
              name={'mail'}
              size={iconSizes.md}
              color={colors.iconSecondary}
            />
          )}
          labelStyle={[styles.lableStyle, {color: colors.textSecondary}]}
          style={styles.drawerItem}
        />
        <DrawerItem
          label={'FAQs'}
          icon={() => (
            <AntDesign
              name={'questioncircleo'}
              size={iconSizes.md}
              color={colors.iconSecondary}
            />
          )}
          labelStyle={[styles.lableStyle, {color: colors.textSecondary}]}
          style={styles.drawerItem}
        />
        <DrawerItem
          label={'Settings'}
          icon={() => (
            <AntDesign
              name={'setting'}
              size={iconSizes.md}
              color={colors.iconSecondary}
            />
          )}
          labelStyle={[styles.lableStyle, {color: colors.textSecondary}]}
          style={styles.drawerItem}
        />
      </View>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerItemContainer: {
    marginVertical: spacing.xl,
  },
  lableStyle: {
    fontSize: fontSize.md,
    fontFamily: fontFamilies.medium,
  },
  drawerItem: {
    marginVertical: spacing.sm,
  },
});
