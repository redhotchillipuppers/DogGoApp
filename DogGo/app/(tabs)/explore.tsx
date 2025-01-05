import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExploreScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Screen</Text>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ExploreScreen;
