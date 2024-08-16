import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Table from './src/Table';
import Cards from './src/Cards';
import CustomTabs from './src/CustomTabs';
import Tabs from './src/Tabs';
import PlanetsTab from './src/PlanetsTab';
import Chart from './src/Chart';

const {width, height} = Dimensions.get('window');

const App = () => {
  const combinedData = [{type: 'customTable'}, {type: 'table'}, {type: 'tabs'}];
  const opacityAnim = useRef(new Animated.Value(0.7)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.7,
          duration: 3000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [opacityAnim]);

  const customTabContents = {
    Basic: <Text style={styles.contentText}>Basic content goes here.</Text>,
    Chart: <Chart />,
    KP: <Text style={styles.contentText}>KP content goes here.</Text>,
    Ashtakvarga: (
      <Text style={styles.contentText}>Ashtakvarga content goes here.</Text>
    ),
    Dasha: <Text style={styles.contentText}>Dasha content goes here.</Text>,
    Report: <Text style={styles.contentText}>Report content goes here.</Text>,
  };

  const tabContents = {
    General: <Cards />,
    Planetary: (
      <Text style={styles.contentText}>Planetary content goes here.</Text>
    ),
    Yoga: <Text style={styles.contentText}>Yoga content goes here.</Text>,
  };

  const planetsTab = {
    Sign: <Text style={styles.contentText}>Planetary content goes here.</Text>,
    Nakshatra: <Table />,
  };
  const renderItem = ({item}) => {
    if (item.type === 'customTable') {
      return <CustomTabs tabs={customTabContents} />;
    } else if (item.type === 'table') {
      return <PlanetsTab planetsTabContents={planetsTab} />;
    } else if (item.type === 'tabs') {
      return <Tabs tabContents={tabContents} />;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#4e6509'}}>
      <Animated.View style={[styles.smokeBackground, {opacity: opacityAnim}]}>
        <LinearGradient
          colors={['#ba9114', '#144905']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={styles.gradient}
        />
      </Animated.View>
      <FlatList
        data={combinedData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
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
    fontSize: 18,
    color: '#DDDDDD',
  },
});

export default App;
