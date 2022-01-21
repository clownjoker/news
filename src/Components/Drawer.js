import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Main from '../screens/Main';
import Test from '../screens/Test';
import Test2 from '../screens/Test2';




const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="test">
      {/* <Drawer.Screen
        name="main"
        component={Main}
        options={{ drawerLabel: 'Main' }}
      /> */}
      <Drawer.Screen
        name="test"
        component={Test}
        options={{ drawerLabel: 'Test' }}
      />
      <Drawer.Screen
        name="test2"
        component={Test2}
        options={{ drawerLabel: 'Test2' }}
      />
      
    </Drawer.Navigator>
  );
}
export default MyDrawer;