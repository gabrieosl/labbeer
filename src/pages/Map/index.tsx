import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';
import BaseMenu from '../../components/BaseMenu';
import locationIcon from '../../assets/Location.png';
import arrowShape from '../../assets/arrow_shape.png';
import locator from '../../assets/locator.png';

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
  Location,
  MyLocationButton,
  SearchLocationButton,
  LocationText,
} from './styles';

interface LocationProps {
  data: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  name: string;
}

interface BarProps {
  id: number;
  name: string;
  address: string;
  latitude: string;
  longitute: string;
}

const Map: React.FC = () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState<LocationProps>({
    data: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.15,
      longitudeDelta: 0.15,
    },
    name: 'Localização atual',
  });
  const [bars, setBars] = useState<BarProps[]>([]);
  const [search, setSearch] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);
  const inputRef = useRef<any>(null);

  const setCurrentLocation = () => {
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      setLocation({
        data: {
          latitude: info.coords.latitude || 0,
          longitude: info.coords.longitude || 0,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15,
        },
        name: 'Localização atual',
      });
    });
  };

  const handleFilter = useCallback(() => {
    if (!isFiltering) {
      inputRef.current.focus();
    }
    setIsFiltering(!isFiltering);
  }, [isFiltering]);

  const updateData = useCallback(() => {
    async function getData() {
      const response = await api.get(`/bars?q=${search}`);
      if (response.status === 200) {
        setBars(response.data);
      }
    }
    getData();
  }, [search]);

  useEffect(() => updateData(), [search, updateData]);
  useEffect(() => setCurrentLocation(), []);

  return (
    <Container>
      <Header />
      <Location>
        <MyLocationButton onPress={setCurrentLocation}>
          <Image source={locator} />
        </MyLocationButton>
        <SearchLocationButton onPress={handleFilter}>
          <LocationText
            ref={inputRef}
            placeholder={location.name}
            autoCorrect={false}
            autoCapitalize="none"
            value={search}
            onChangeText={e => setSearch(e)}
            onSubmitEditing={() => setIsFiltering(false)}
            onFocus={() => setIsFiltering(true)}
            onBlur={() => setIsFiltering(false)}
          />
          <Image source={arrowShape} />
        </SearchLocationButton>
      </Location>
      {isFiltering ? (
        <BarList>
          {bars.map(bar => (
            <BarItem key={bar.id}>
              <BarDetails onPress={() => navigation.navigate('Map')}>
                <BarName>{bar.name}</BarName>
                <BarLocation>
                  <BarAddress numberOfLines={1}>{bar.address}</BarAddress>
                </BarLocation>
              </BarDetails>
            </BarItem>
          ))}
        </BarList>
      ) : (
        <>
          <MapView
            showsUserLocation
            style={{ height: 400 }}
            region={location.data}
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
                <BarDetails
                  onPress={() => {
                    setLocation({
                      data: {
                        latitude: Number(bar.latitude),
                        longitude: Number(bar.longitute),
                        latitudeDelta: 0.15,
                        longitudeDelta: 0.15,
                      },
                      name: bar.name,
                    });
                  }}
                >
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
        </>
      )}
      <BaseMenu />
    </Container>
  );
};

export default Map;
