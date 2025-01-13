import React, { useState, useEffect } from 'react';
import { View, StyleSheet, PermissionsAndroid, Platform, Alert } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import * as Location from 'expo-location'; // For device location

// Set your Mapbox access token
MapboxGL.setAccessToken('YOUR_MAPBOX_ACCESS_TOKEN');

const Map = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [regionLoaded, setRegionLoaded] = useState(false);

  // Request location permission and get device location
  const fetchUserLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required to use the map.');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation([location.coords.longitude, location.coords.latitude]);
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  // Cache the map region
  const cacheRegion = async () => {
    if (!userLocation) return;
    try {
      const bounds = [
        [userLocation[0] - 0.05, userLocation[1] - 0.05], // Southwest corner
        [userLocation[0] + 0.05, userLocation[1] + 0.05], // Northeast corner
      ];
      const metadata = { name: 'Cached Region' };

      await MapboxGL.offlineManager.createPack({
        name: 'cached-region',
        bounds,
        minZoom: 10,
        maxZoom: 16,
        styleURL: MapboxGL.StyleURL.Street,
        metadata,
      });

      Alert.alert('Success', 'Map region cached for offline use.');
      setRegionLoaded(true);
    } catch (error) {
      console.error('Error caching region:', error);
    }
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  return (
    <View style={styles.container}>
      {userLocation && (
        <MapboxGL.MapView
          style={styles.map}
          onDidFinishLoadingMap={cacheRegion} // Cache map after it's loaded
        >
          <MapboxGL.Camera
            centerCoordinate={userLocation}
            zoomLevel={14}
            animationMode="flyTo"
            animationDuration={1000}
          />
          <MapboxGL.UserLocation visible={true} />
        </MapboxGL.MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
