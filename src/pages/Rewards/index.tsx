import React from 'react';
import { Text, Image, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Container, H1, P, Summary, Stamps, Stamp, StampLevel } from './styles';

import Header from '../../components/Header';

const Rewards: React.FC = () => {
  return (
    <Container>
      <Header />
      <AnimatedCircularProgress
        style={{ marginTop: 25 }}
        size={184}
        width={4}
        fill={80}
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
      <H1 style={{ marginTop: 20 }}>Nivel 4</H1>
      <P>1.434 pontos e 350 selos</P>

      <Summary>
        <AnimatedCircularProgress
          style={{ marginTop: 25 }}
          size={80}
          width={4}
          fill={80}
          rotation={-180}
          tintColor="#F97115"
          backgroundColor="#EDF1F7"
        >
          {() => (
            <View>
              <P style={{ color: '#F97115', fontWeight: 'bold' }}>1.432</P>
              <P style={{ fontWeight: 'bold' }}>/2.500</P>
            </View>
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
      <Stamps>
        <Stamp>
          <StampLevel />
        </Stamp>
        <Stamp>
          <StampLevel />
        </Stamp>
        <Stamp>
          <StampLevel />
        </Stamp>
      </Stamps>
    </Container>
  );
};

export default Rewards;
