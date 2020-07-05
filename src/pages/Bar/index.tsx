import React, { useState, useMemo, useEffect } from 'react';
import { View, Image, ScrollView } from 'react-native';

import api from '../../services/api';

import Header from '../../components/Header';
import BaseMenu from '../../components/BaseMenu';
import RatingInput from '../../components/RatingInput';
import star from '../../assets/star.png';
import starWhite from '../../assets/star_white.png';

import {
  Container,
  Content,
  BarPicture,
  BarTitle,
  BarSubitle,
  AvgRating,
  AvgRatingText,
  RatingsTitle,
  Ratings,
  RatingAuthor,
  AuthorAvatar,
  AuthorName,
  RatingValue,
  RatingValueText,
  RatingContent,
} from './styles';

interface BarItemProps {
  id: number;
  name: string;
  phone: string;
  address: string;
  latitude: string;
  longitute: string;
  cnpj: number;
  logo: string;
}

interface RatingItemProps {
  id: number;
  customerId: number;
  barId: number;
  service: number;
  atmosphere: number;
  quality: number;
  price: number;
  review: string;
  customer: {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    avatar: string;
    birthDate: string;
    level: number;
  };
}

interface BarProps {
  route: {
    params: {
      barId: number;
    };
  };
}

const Bar: React.FC<BarProps> = ({ route }) => {
  const [bar, setBar] = useState<BarItemProps>({} as BarItemProps);
  const [ratings, setRatings] = useState<RatingItemProps[]>([]);

  const meanRating = useMemo(() => {
    const mean =
      ratings.reduce((total, current) => {
        // eslint-disable-next-line no-param-reassign
        total += current.service;
        return total;
      }, 0) / ratings.length;

    return mean.toFixed(2);
  }, [ratings]);

  useEffect(() => {
    async function getBarData() {
      const response = await api.get(`/bars/${route.params.barId}`);
      if (response.status === 200) {
        setBar(response.data);
      }
    }

    async function getRatingsData() {
      const response = await api.get(
        `/ratings?barId=${route.params.barId}&_expand=customer`,
      );
      if (response.status === 200) {
        setRatings(response.data);
      }
    }
    getBarData();
    getRatingsData();
  }, [route.params.barId]);

  return (
    <>
      <Header />
      <ScrollView style={{ flex: 1 }}>
        <Container>
          <BarPicture
            source={{
              uri:
                bar.logo ||
                'https://previews.123rf.com/images/latkun/latkun1712/latkun171200130/92172856-empty-transparent-background-seamless-pattern.jpg',
            }}
          />
          <Content>
            <BarTitle>{bar.name}</BarTitle>
            <BarSubitle>{bar.name}</BarSubitle>
            <AvgRating>
              <Image source={star} />
              <AvgRatingText>
                {`${meanRating} (${ratings.length})`}
              </AvgRatingText>
            </AvgRating>
            <RatingsTitle>Opiniões</RatingsTitle>
            <Ratings>
              {ratings.slice(0, 3).map(rating => (
                <View key={rating.id}>
                  <RatingAuthor>
                    <AuthorAvatar source={{ uri: rating.customer.avatar }} />
                    <AuthorName>{rating.customer.name}</AuthorName>
                    <RatingValue>
                      <RatingValueText>{rating.service}</RatingValueText>
                      <Image source={starWhite} />
                    </RatingValue>
                  </RatingAuthor>

                  <RatingContent>{rating.review}</RatingContent>
                </View>
              ))}
            </Ratings>
            <RatingInput />
          </Content>
        </Container>
      </ScrollView>
      <BaseMenu />
    </>
  );
};

export default Bar;
