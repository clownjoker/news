import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import RecentUpdate from '../Components/RecentUpdate';
import Stories from '../Components/Stories';


const News = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topText}>
        <Text style={styles.title}>How Terriers & Royals</Text>
        <Text style={styles.title}>Gatecrashed Final</Text>
        <Text style={styles.subTitle}>
          Lorem ipsum dolor sit amet, consectetur
        </Text>
        <Text style={styles.subTitle}>adipiscing, elit do eiusmod</Text>
      </View>
      <ScrollView>
        {/* top stories */}
      <ScrollView style={styles.scroll}>
        <View style={styles.topTitleStories}>
          <Text style={styles.titlStories}>Top Stories</Text>
        </View>
        <Stories
          nameNews={'The World Global Warming Annual Summit'}
          Time="15 min"
          Name="Michael"
        />
        <Stories
          nameNews={'US President Inauguration held in Washington'}
          Time="1 hour ago"
          Name="Roy Monttgomery"
        />
        <Stories
          nameNews={'Spotlight on Medtech Outsourcing and Innovation'}
          Time="1 hour ago"
          Name="Michael"
        />
        
      </ScrollView>
      {/* Recent Update */}
      <ScrollView style={[styles.scroll,{marginTop:10}]}>
        <View style={styles.topTitleStories}>
          <Text style={styles.titlStories}>Recent Update </Text>
        </View>

        <RecentUpdate TypeNews='SPORT' TitleRecentUpdate='Vettel is Ferrari Number One - Hamilton' Time='15 min'/>
        <RecentUpdate TypeNews='SPORT' TitleRecentUpdate='Vettel is Ferrari Number One - Hamilton' Time='15 min'/>

      </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topText: {
    width: '100%',
    height: '25%',
    backgroundColor: '#000',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    color: '#fff',
    fontSize: 12,
  },
  scroll: {
    marginHorizontal: 15,
  },
  topTitleStories: {
    marginVertical: 15,
  },
  titlStories: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default News;
