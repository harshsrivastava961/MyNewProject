import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PlanetsTab = ({planetsTabContents}) => {
  const [selectedTab, setSelectedTab] = useState('Sign');

  const handleTabPress = tab => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planets</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => handleTabPress('Sign')}>
          <LinearGradient
            colors={
              selectedTab === 'Sign'
                ? ['#70E1F5', '#FFD194']
                : ['transparent', 'transparent']
            }
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={[styles.tab, selectedTab === 'Sign' && styles.selectedTab]}>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'Sign' && styles.selectedTabText,
              ]}>
              Sign
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('Nakshatra')}>
          <LinearGradient
            colors={
              selectedTab === 'Nakshatra'
                ? ['#70E1F5', '#FFD194']
                : ['transparent', 'transparent']
            }
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={[
              styles.tab,
              selectedTab === 'Nakshatra' && styles.selectedTab,
            ]}>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'Nakshatra' && styles.selectedTabText,
              ]}>
              Nakshatra
            </Text>
          </LinearGradient>
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
    marginBottom: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF',
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

export default PlanetsTab;

