import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './screens/Main';
import News from './screens/News';
import Popular from './screens/Popular.js';
import Favorited from './screens/Favorited';
import Test from './screens/Test';
import Test2 from './screens/Test2';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="news"
          component={News}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="popular"
          component={Popular}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="favorited"
          component={Favorited}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="test"
          component={Test}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="test2"
          component={Test2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
