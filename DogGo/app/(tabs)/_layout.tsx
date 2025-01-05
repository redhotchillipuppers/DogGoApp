import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Slot } from 'expo-router'; // Assuming you use Expo Router

const Layout: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/SplashScreen/SplashScreen.jpg')}
          style={styles.image}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Slot /> {/* Main navigation content */}
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
    resizeMode: 'cover',
  },
});

export default Layout;
