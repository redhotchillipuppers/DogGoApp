import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRouter, Slot } from 'expo-router';
import 'mapbox-gl/dist/mapbox-gl.css';


const Layout: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const router = useRouter();

  console.log('isSplashVisible:', isSplashVisible);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isSplashVisible) {
      router.replace('/auth/Login'); 
    }
  }, [isSplashVisible, router]);

  if (isSplashVisible) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require('../assets/SplashScreen/SplashScreen.jpg')}
          style={styles.splashImage}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Slot /> 
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
});

export default Layout;
