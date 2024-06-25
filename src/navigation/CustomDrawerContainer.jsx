import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {colors} from '../constants/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';

export default function CustomDrawerContainer(props) {
  const isDark = true;
  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };
  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.headerIconContainer}>
        <TouchableOpacity onPress={toggleDrawer}>
          <AntDesign
            name={'close'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons
            name={isDark ? 'sun' : 'moon'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
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
          labelStyle={styles.lableStyle}
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
          labelStyle={styles.lableStyle}
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
          labelStyle={styles.lableStyle}
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
          labelStyle={styles.lableStyle}
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
          labelStyle={styles.lableStyle}
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
          labelStyle={styles.lableStyle}
          style={styles.drawerItem}
        />
      </View>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
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
    color: colors.textSecondary,
    fontFamily: fontFamilies.medium,
  },
  drawerItem: {
    marginVertical: spacing.sm,
  },
});
