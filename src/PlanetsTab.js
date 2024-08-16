import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const PlanetsTab = ({planetsTabContents}) => {
  const [selectedTab, setSelectedTab] = useState('General');

  const handleTabPress = tab => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Understanding your Kundli</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Sign' && styles.selectedTab]}
          onPress={() => handleTabPress('Sign')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Sign' && styles.selectedTabText,
            ]}>
            Sign
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Nakshatra' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Nakshatra')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Nakshatra' && styles.selectedTabText,
            ]}>
            Nakshatra
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {planetsTabContents[selectedTab]}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginRight: 15
  },
  selectedTab: {
    backgroundColor:
      'linear-gradient(90deg, rgba(255,196,0,1) 0%, rgba(1,218,197,1) 100%)',
  },
  tabText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  selectedTabText: {
    color: '#000000',
  },
  contentContainer: {
    flex: 1,
  },
  contentText: {
    fontSize: 18,
    color: '#DDDDDD',
  },
});

export default PlanetsTab;
