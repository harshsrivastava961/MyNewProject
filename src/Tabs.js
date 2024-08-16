import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Tabs = ({ tabContents }) => {
  const [selectedTab, setSelectedTab] = useState('General');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Understanding your Kundli</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'General' && styles.selectedTab]}
          onPress={() => handleTabPress('General')}
        >
          <Text style={[styles.tabText, selectedTab === 'General' && styles.selectedTabText]}>
            General
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Planetary' && styles.selectedTab]}
          onPress={() => handleTabPress('Planetary')}
        >
          <Text style={[styles.tabText, selectedTab === 'Planetary' && styles.selectedTabText]}>
            Planetary
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Yoga' && styles.selectedTab]}
          onPress={() => handleTabPress('Yoga')}
        >
          <Text style={[styles.tabText, selectedTab === 'Yoga' && styles.selectedTabText]}>
            Yoga
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {tabContents[selectedTab]}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    paddingHorizontal:0,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    marginHorizontal:20
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal:20
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginRight:15
  },
  selectedTab: {
    backgroundColor: 'linear-gradient(90deg, rgba(255,196,0,1) 0%, rgba(1,218,197,1) 100%)',
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

export default Tabs;
