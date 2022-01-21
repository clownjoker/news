import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Favorited from '../screens/Favorited.js';
import News from '../screens/News.js';
import Popular from '../screens/Popular.js';

const Tab = createMaterialTopTabNavigator();

const TopTap = () => {
  return (
    <Tab.Navigator
      initialRouteName="news"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: {fontSize: 14,color:'#fff',fontWeight:'bold'},
        tabBarStyle: {backgroundColor: '#F00'},
       tabBarIndicatorStyle: {backgroundColor:'#fff'}

      }}>
      <Tab.Screen
        name="favorited"
        component={Favorited}
        options={{tabBarLabel: 'Favorited'}}
      />
      <Tab.Screen
        name="popular"
        component={Popular}
        options={{tabBarLabel: 'Popular'}}
      />
      <Tab.Screen
        name="news"
        component={News}
        options={{tabBarLabel: 'whats News'}}
      />
    </Tab.Navigator>
  );
};

export default TopTap;
