import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from "../screens/EditProfileScreen";
import FormGenerator from '../screens/AddItem';
import ShippingInfo from '../screens/ShippingInfo';
import MyDonationScreen from "../screens/MyDonationScreen";
import ListScreen from "../screens/ListScreen";
import Colors from "../constants/Colors";


const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-home` : 'md-home'
            }
        />
    ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
    {
        Links: LinksScreen,
    },
    config
);

LinksStack.navigationOptions = {
    tabBarLabel: 'Links',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
    tabBarOptions: { activeTintColor: Colors.activeTintColor, }
};

LinksStack.path = '';

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
        EditProfile: EditProfileScreen,
        MyDonation: MyDonationScreen,
        List: ListScreen,

    },

    config
);


ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}/>
    ),
    tabBarOptions: { activeTintColor: Colors.activeTintColor, }
};

ProfileStack.path = '';

// 21341234123
const ShippingStack = createStackNavigator(
    {
        Links: ShippingInfo,
    },
    config
);
ShippingStack.navigationOptions = {
    tabBarLabel: 'Shipping',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-paper-plane' : 'md-paper-plane'}/>
    ),
    tabBarOptions: { activeTintColor: Colors.activeTintColor, }
};

ShippingStack.path = '';

const ItemStack = createStackNavigator(
    {
        Profile: FormGenerator,
    },
    config
);


ItemStack.navigationOptions = {
    tabBarLabel: 'Items',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}/>
    ),
    tabBarOptions: { activeTintColor: Colors.activeTintColor, }
};

ItemStack.path = '';


const tabNavigator = createBottomTabNavigator({
    HomeStack,
    ItemStack,
    ShippingStack,
    ProfileStack,

});

tabNavigator.path = '';

export default tabNavigator;
