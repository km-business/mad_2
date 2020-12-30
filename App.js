import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactsScreen from './ContactsScreen';
import GalleryScreen from './GalleryScreen';
import SettingScreen from './SettingScreen';

const TabNavigator = createBottomTabNavigator({
  Contacts: {
    screen: ContactsScreen,
  },
  Gallery: {
    screen: GalleryScreen,
  },
  Setting: {
    screen: SettingScreen,
  },
 },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Contacts') {
            iconName = 'person-circle-outline';
        } else if (routeName === 'Gallery') {
            iconName = 'image-outline';
        } else if (routeName === 'Settings') {
            iconName = 'ios-phone-landscape-sharp';
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
  },
);
export default createAppContainer(TabNavigator);
