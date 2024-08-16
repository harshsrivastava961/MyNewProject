import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const data = {
  positions: [
    { text: "1", top: "62%", left: "53%" },
    { text: "2", top: "90%", left: "63%" },
    { text: "3", top: "58%", left: "95%" },
    { text: "4", top: "50%", left: "60%" },
    { text: "5", top: "45%", left: "94%" },
    { text: "6", top: "17%", left: "68%" },
    { text: "7", top: "41%", left: "53%" },
    { text: "8", top: "17%", left: "35%" },
    { text: "9", top: "45%", left: "12%" },
    { text: "10", top: "50%", left: "42%" },
    { text: "11", top: "58%", left: "12%" },
    { text: "12", top: "90%", left: "40%" },
    { text: "Ke", top: "50%", left: "24%" },
    { text: "Ma", top: "25%", left: "48%" },
    { text: "Mo", top: "32%", left: "90%" },
    { text: "Ra", top: "47%", left: "68%" },
    { text: "Ve Sa", top: "75%", left: "48%" },
    { text: "Su Ju", top: "90%", left: "18%" },
    { text: "Me", top: "75%", left: "10%" }
  ]
};

const ResponsiveChart = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../asset/frame.png')} 
        style={styles.backgroundImage}
        resizeMode="contain"
      >
        {data.positions.map((item, index) => (
          <Text 
            key={index} 
            style={[styles.text, { top: item.top, left: item.left }]}
          >
            {item.text}
          </Text>
        ))}
      </ImageBackground>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: width * 0.9,  
    aspectRatio: 1.5, 
    position: 'relative',
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    textAlign: 'center',
    transform: [{ translateX: -width * 0.04 }, { translateY: -width * 0.04 }],
  },
});

export default ResponsiveChart;


