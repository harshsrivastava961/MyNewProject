import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomTabs from './src/CustomTabs';
import Main from './src/Main';

const {width, height} = Dimensions.get('window');

const App = () => {
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
    Basic: <Text style={styles.contentText}>Basic content</Text>,
    Chart: <Main />,
    KP: <Text style={styles.contentText}>KP content</Text>,
    Ashtakvarga: (
      <Text style={styles.contentText}>Ashtakvarga content</Text>
    ),
    Dasha: <Text style={styles.contentText}>Dasha content</Text>,
    Report: <Text style={styles.contentText}>Report content</Text>,
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
       <CustomTabs
          tabs={customTabContents}
          fixedHeaderStyle={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
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
    marginHorizontal: 20,
    textAlign: 'center'
  },
});

export default App;
