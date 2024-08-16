
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Tabs = ({ tabContents }) => {
  const [selectedTab, setSelectedTab] = useState('General');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Understanding your Kundli</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => handleTabPress('General')}>
          <LinearGradient
            colors={
              selectedTab === 'General'
                ? ['#70E1F5', '#FFD194']
                : ['transparent', 'transparent']
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.tab, selectedTab === 'General' && styles.selectedTab]}>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'General' && styles.selectedTabText,
              ]}>
              General
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('Planetary')}>
          <LinearGradient
            colors={
              selectedTab === 'Planetary'
                ? ['#70E1F5', '#FFD194']
                : ['transparent', 'transparent']
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.tab, selectedTab === 'Planetary' && styles.selectedTab]}>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'Planetary' && styles.selectedTabText,
              ]}>
              Planetary
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('Yoga')}>
          <LinearGradient
            colors={
              selectedTab === 'Yoga'
                ? ['#70E1F5', '#FFD194']
                : ['transparent', 'transparent']
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.tab, selectedTab === 'Yoga' && styles.selectedTab]}>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'Yoga' && styles.selectedTabText,
              ]}>
              Yoga
            </Text>
          </LinearGradient>
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
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginRight: 15,
  },
  selectedTab: {
    borderColor: 'transparent',
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
