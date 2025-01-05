// DogGo Static Splash Screen Component
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

type SplashScreenProps = {};

const SplashScreen: React.FC<SplashScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('assets\\SplashScreen\\SplashScreen.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;