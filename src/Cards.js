import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const data = [
  {
    title: 'Description',
    content:
      "Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. It helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.",
  },
  {
    title: 'Personality',
    content:
      "Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. It helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.",
  },
  {
    title: 'Career',
    content:
      "Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. It helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.",
  },
  {
    title: 'Health',
    content:
      "Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. It helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.",
  },
];

const Card = ({title, content}) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardContent}>{content}</Text>
  </View>
);

const Cards = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card title={item.title} content={item.content} />
        )}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#4c6404',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    color: '#DDDDDD',
  },
});

export default Cards;
