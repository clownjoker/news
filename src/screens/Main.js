import React from 'react';
import {View, Text, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../Components/Header';
import TopTap from '../Components/TopTab';


const Main = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#9B0000"> </StatusBar>
        <Header />
        <TopTap />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
export default Main;
