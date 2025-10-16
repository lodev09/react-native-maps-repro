import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import MapView, { LatLng, Region, MapMarker } from 'react-native-maps';

import { View } from '@/components/Themed';
import { CenterMarker } from '@/components/CenterMarker';
import { MapControls } from '@/components/MapControls';
import { useRef, useState } from 'react';

const TEST_COORDINATES: LatLng = {
  latitude: 37.76497,
  longitude: -122.431983,
};

function formatCoordinates(coordinates?: LatLng) {
  if (!coordinates) return '(Empty)';
  return `${coordinates?.latitude}, ${coordinates?.longitude}`;
}

export default function MapScreen() {
  const mapRef = useRef<MapView>(null);

  const [region, setRegion] = useState<Region>();

  const handleAnimateToCoordsPress = () => {
    mapRef.current?.animateCamera({
      center: TEST_COORDINATES,
    })
  }

  const handleAnimateToRegionPress = () => {
    if (!region) return;
    mapRef.current?.animateToRegion(region);
  }

  const handleRegionChangeComplete = (region: Region) => {
    setRegion(region);
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider="google"
        initialCamera={{
          center: TEST_COORDINATES,
          pitch: 0,
          heading: 0,
          zoom: 13,
        }}
        pitchEnabled={false}
        rotateEnabled={false}
        showsCompass={false}
        toolbarEnabled={false}
        showsIndoorLevelPicker={false}
        showsMyLocationButton={false}
        showsBuildings={false}
        showsScale={false}
        userInterfaceStyle="light"
        onRegionChangeComplete={handleRegionChangeComplete}
      >
        <MapMarker coordinate={TEST_COORDINATES} />
      </MapView>
      <CenterMarker />
      <MapControls>
        <TouchableOpacity onPress={handleAnimateToCoordsPress}>
          <Text style={styles.linkText}>Animate to: {formatCoordinates(TEST_COORDINATES)}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAnimateToRegionPress}>
          <Text style={styles.linkText}>Center: {formatCoordinates(region)}</Text>
        </TouchableOpacity>
      </MapControls>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: StyleSheet.absoluteFillObject,
  linkText: {
    color: '#283593',
  }
});
