import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const CustomTabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(Object.keys(tabs)[0]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Image
            source={require('../asset/backArrow.png')}
            style={styles.icon}
          />
          <Text style={styles.headerText}>Kundali</Text>
        </View>
        <View style={styles.tabContainer}>
          {Object.keys(tabs).map((tab, index) => (
            <React.Fragment key={tab}>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  selectedTab === tab && styles.activeTab,
                ]}
                onPress={() => setSelectedTab(tab)}>
                <Text
                  style={[
                    styles.tabText,
                    selectedTab === tab && styles.activeTabText,
                  ]}>
                  {tab}
                </Text>
              </TouchableOpacity>
              {index < Object.keys(tabs).length - 1 && (
                <View style={styles.verticalLine} />
              )}
            </React.Fragment>
          ))}
        </View>
      </View>
      <View contentContainerStyle={styles.contentContainer}>
        {tabs[selectedTab]}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  tabButton: {
    padding: 10,
  },
  activeTab: {
    // borderBottomWidth: 2,
    // borderBottomColor: '#FFF',
  },
  tabText: {
    color: '#FFF',
    fontSize: 16,
  },
  activeTabText: {
    fontSize: 18, 
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
  },
  icon: {
    width: 10,
    height: 20,
    marginRight: 4,
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 20,
  },
  verticalLine: {
    height: '30%',
    width: 1,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
  },
});

export default CustomTabs;
