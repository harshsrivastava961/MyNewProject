import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  View
} from 'react-native';
import Table from './Table';
import Cards from './Cards';
import Tabs from './Tabs';
import PlanetsTab from './PlanetsTab';
import Chart from './Chart';

const {width, height} = Dimensions.get('window');

const Main = () => {
  const combinedData = [{type: 'chart'}, {type: 'table'}, {type: 'tabs'}];

  const tabContents = {
    General: <Cards />,
    Planetary: (
      <Text style={styles.content}>Planetary content</Text>
    ),
    Yoga: <Text style={styles.content}>Yoga content</Text>,
  };

  const planetsTab = {
    Sign: <Text style={styles.contentText}>Planetary content goes here.</Text>,
    Nakshatra: <Table />,
  };
  const renderItem = ({item}) => {
    if (item.type === 'chart') {
      return <Chart />;
    } else if (item.type === 'table') {
      return <PlanetsTab planetsTabContents={planetsTab} />;
    } else if (item.type === 'tabs') {
      return <Tabs tabContents={tabContents} />;
    }
  };

  return (
    <View>
   <FlatList
      data={combinedData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.flatListContent}
      ListFooterComponent={<View style={{ height: 30 }} />}
    />
    </View>
 
  );
};

const styles = StyleSheet.create({
  smokeBackground: {
    position: 'absolute',
    width: width * 2,
    height: height * 2,
    top: -height / 2,
    left: -width / 2,
    backgroundColor: '#273204',
    transform: [{rotate: '45deg'}],
  },
  gradient: {
    flex: 1,
  },
  contentText: {
    fontSize: 14,
    color: '#DDDDDD',
    marginHorizontal: 0
  },
  content: {
    fontSize: 14,
    color: '#DDDDDD',
    marginHorizontal: 20
  },
  flatListContent: {
    paddingBottom: 50,
  },
});

export default Main;
