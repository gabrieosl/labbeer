import React, { useState, useCallback, useEffect } from 'react';
import { Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';
import BaseMenu from '../../components/BaseMenu';
import locationIcon from '../../assets/Location.png';
import arrowShape from '../../assets/arrow_shape.png';

import {
  Container,
  Expand,
  ExpandButton,
  BarList,
  BarItem,
  BarDetails,
  BarName,
  BarLocation,
  BarAddress,
  BarLinkButton,
  BarLinkButtonText,
} from './styles';

interface LocationProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface BarProps {
  id: number;
  name: string;
  address: string;
  latitude: string;
  longitute: string;
}

const Map: React.FC = () => {
  const { signOut } = useAuth();

  const [location, setLocation] = useState<LocationProps>({} as LocationProps);
  const [bars, setBars] = useState<BarProps[]>([]);

  const useLocation = useCallback(() => {
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      setLocation({
        latitude: 1, // info.coords.latitude || 0,
        longitude: 1, // info.coords.longitude || 0,
        latitudeDelta: 0.15,
        longitudeDelta: 0.15,
      });
    });
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/bars');
      if (response.status === 200) {
        setBars(response.data);
      }
    }
    getData();
  }, []);

  return (
    <Container>
      <Header />
      <MapView
        showsUserLocation
        style={{ height: 400 }}
        region={location}
        initialRegion={location}
      >
        {bars.map(bar => (
          <Marker
            key={bar.id}
            coordinate={{
              latitude: Number(bar.latitude),
              longitude: Number(bar.longitute),
            }}
          />
        ))}
      </MapView>
      <Expand>
        <ExpandButton />
      </Expand>
      <BarList>
        {bars.map(bar => (
          <BarItem key={bar.id}>
            <BarDetails>
              <BarName>{bar.name}</BarName>
              <BarLocation>
                <Image source={locationIcon} />
                <BarAddress numberOfLines={1}>{bar.address}</BarAddress>
              </BarLocation>
            </BarDetails>
            <BarLinkButton>
              <BarLinkButtonText>Conhecer</BarLinkButtonText>
              <Image source={arrowShape} />
            </BarLinkButton>
          </BarItem>
        ))}
      </BarList>
      <BaseMenu />
      {/* <TouchableOpacity onPress={signOut}>
        <Text>Logout</Text>
      </TouchableOpacity> */}
    </Container>
  );
};

export default Map;
