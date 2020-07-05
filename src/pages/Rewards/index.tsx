<<<<<<< HEAD
import React from "react";
import { Text, Image, View, ScrollView } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Header from "../../components/Header";
import BaseMenu from "../../components/BaseMenu";

import { useAuth } from "../../hooks/auth";
=======
import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Header from '../../components/Header';
import BaseMenu from '../../components/BaseMenu';

import { useAuth } from '../../hooks/auth';
>>>>>>> master

import {
  Container,
  H1,
  P,
  Summary,
  RewardsContainer,
  RewardItem,
  RewardDetails,
  RewardIcon,
} from './styles';

<<<<<<< HEAD
import MetaOne from "../../assets/Rewards/meta1.png";
import MetaTwo from "../../assets/Rewards/meta2.png";
=======
import MetaOne from '../../assets/Rewards/meta1.png';
import MetaTwo from '../../assets/Rewards/meta2.png';
>>>>>>> master

const Rewards: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Container>
        <Header />
        <ScrollView
          contentContainerStyle={{ alignItems: 'center', width: '100%' }}
        >
          <AnimatedCircularProgress
            style={{ marginTop: 25 }}
            size={184}
            width={4}
            fill={70}
            rotation={-180}
            tintColor="#F97115"
            backgroundColor="#EDF1F7"
          >
            {() => (
              <Image
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: 100,
                }}
                source={{
                  uri: user.avatar,
                }}
              />
            )}
          </AnimatedCircularProgress>
          <H1 style={{ marginTop: 20 }}>Nivel 4</H1>
          <P>1.434 pontos e 350 selos</P>

          <Summary>
            <AnimatedCircularProgress
              style={{ marginTop: 25 }}
              size={184}
              width={4}
              fill={70}
              rotation={-180}
              tintColor="#F97115"
              backgroundColor="#EDF1F7"
            >
              {() => (
                <Image
                  style={{
                    width: 160,
                    height: 160,
                    borderRadius: 100,
                  }}
                  source={{
                    uri:
                      'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg',
                  }}
                />
              )}
            </AnimatedCircularProgress>
            <View>
              <P>Alcance o nível 5 e libere</P>
              <P>novos benefícios</P>
            </View>
          </Summary>
          <H1
            style={{
              fontSize: 26,
              alignSelf: 'baseline',
              marginLeft: 35,
              marginTop: 15,
            }}
          >
            Conquistas
          </H1>
          <RewardsContainer>
            <RewardItem>
              <RewardIcon source={MetaOne} />
              <RewardDetails>
                <H1>Criando Metas</H1>
                <P>Junte 10 selos e ganhe um</P>
                <P>copo de Caipirinha.</P>
                <P>
                  <P style={{ color: '#F97115' }}>5</P>
                  /10
                </P>
              </RewardDetails>
            </RewardItem>
            <RewardItem>
              <RewardIcon source={MetaTwo} />
              <RewardDetails>
                <H1>Criando Metas</H1>
                <P>Junte 10 selos e ganhe uma</P>
                <P>cerveja Budweiser.</P>
                <P>
                  <P style={{ color: '#F97115' }}>3</P>
                  /10
                </P>
              </RewardDetails>
            </RewardItem>
          </RewardsContainer>
        </ScrollView>
      </Container>
      <BaseMenu />
    </>
  );
};

export default Rewards;
