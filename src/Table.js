import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const data = [
  {
    Planet: 'Ascendant',
    Sign: 'Pisces',
    'Sign Lord': 'Jupiter',
    Degree: "13°13'24",
    House: 1,
  },
  {
    Planet: 'Sun',
    Sign: 'Sagittarius',
    'Sign Lord': 'Jupiter',
    Degree: "13°13'24",
    House: 10,
  },
  {
    Planet: 'Moon',
    Sign: 'Aries',
    'Sign Lord': 'Mars',
    Degree: "13°13'24",
    House: 2,
  },
  {
    Planet: 'Mercury',
    Sign: 'Capricorn',
    'Sign Lord': 'Saturn',
    Degree: "13°13'24",
    House: 11,
  },
  {
    Planet: 'Venus',
    Sign: 'Capricorn',
    'Sign Lord': 'Saturn',
    Degree: "13°13'24",
    House: 11,
  },
  {
    Planet: 'Mars',
    Sign: 'Capricorn',
    'Sign Lord': 'Saturn',
    Degree: "13°13'24",
    House: 11,
  },
  {
    Planet: 'Jupiter',
    Sign: 'Sagittarius',
    'Sign Lord': 'Jupiter',
    Degree: "13°13'24",
    House: 10,
  },
  {
    Planet: 'Saturn',
    Sign: 'Aquarius',
    'Sign Lord': 'Jupiter',
    Degree: "13°13'24",
    House: 12,
  },
  {
    Planet: 'Rahu',
    Sign: 'Virgo',
    'Sign Lord': 'Mercury',
    Degree: "13°13'24",
    House: 12,
  },
  {
    Planet: 'Ketu',
    Sign: 'Pisces',
    'Sign Lord': 'Mercury',
    Degree: "13°13'24",
    House: 12,
  },
  {
    Planet: 'Neptune',
    Sign: 'Capricorn',
    'Sign Lord': 'Saturn',
    Degree: "13°13'24",
    House: 12,
  },
  {
    Planet: 'Uranus',
    Sign: 'Capricorn',
    'Sign Lord': 'Saturn',
    Degree: "13°13'24",
    House: 12,
  },
  {
    Planet: 'Pluto',
    Sign: 'Capricorn',
    'Sign Lord': 'Saturn',
    Degree: "13°13'24",
    House: 12,
  },
];

const Table = () => {
  const renderHeader = () => (
    <View style={styles.row}>
      <Text style={[styles.headerCell, styles.cellBorder]}>Planet</Text>
      <Text style={[styles.headerCell, styles.cellBorder]}>Sign</Text>
      <Text style={[styles.headerCell, styles.cellBorder]}>Sign Lord</Text>
      <Text style={[styles.headerCell, styles.cellBorder]}>Degree</Text>
      <Text style={styles.headerCell}>House</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.cellBorder]}>{item.Planet}</Text>
      <Text style={[styles.cell, styles.cellBorder]}>{item.Sign}</Text>
      <Text style={[styles.cell, styles.cellBorder]}>{item['Sign Lord']}</Text>
      <Text style={[styles.cell, styles.cellBorder]}>{item.Degree}</Text>
      <Text style={styles.cell}>{item.House}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.Planet}
        style={styles.table}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 0,
    paddingTop:0,
    paddingBottom:0,
    backgroundColor: '#4c6404',
    borderRadius:15 
  },
  table: {
    marginTop: 0,
  },
  row: {
    flexDirection: 'row',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: 'white'
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 8,
    color: 'white'
  },
  cellBorder: {
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
});

export default Table;
