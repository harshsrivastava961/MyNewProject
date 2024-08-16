import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomTabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(Object.keys(tabs)[0]);

  return (
    <View>
      <View style={styles.tabContainer}>
        {Object.keys(tabs).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentContainer}>
        {tabs[selectedTab]}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: '#333',
  },
  tabButton: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFF',
  },
  tabText: {
    color: '#FFF',
    fontSize: 16,
  },
  contentContainer: {
    padding: 20,
  },
});

export default CustomTabs;
