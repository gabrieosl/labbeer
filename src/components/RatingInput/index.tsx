import React, { useState } from 'react';
import { View, Image, KeyboardAvoidingView, Platform } from 'react-native';

import star from '../../assets/star.png';
import starWhite from '../../assets/star_white.png';
import {
  Container,
  RatingTitle,
  Button,
  ButtonText,
  RatingValueInput,
  ButtonSubmit,
  ButtonSubmitText,
} from './styles';

const ratingValues = [1, 2, 3, 4, 5];

// interface RatingInputProps {
//   addFunction(): unknown;
// }

const RatingInput: React.FC = () => {
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Container>
        <RatingTitle>Sua opnião</RatingTitle>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {ratingValues.map(ratingValue => (
            <Button
              key={ratingValue}
              selected={rating === ratingValue}
              onPress={() => setRating(ratingValue)}
            >
              <ButtonText selected={rating === ratingValue}>
                {ratingValue}
              </ButtonText>
              <Image source={rating === ratingValue ? starWhite : star} />
            </Button>
          ))}
        </View>
        <RatingValueInput
          value={text}
          placeholder="Nos conte mais sobre sua experiência"
          placeholderTextColor="rgba(26, 24, 36, 0.5)"
          onChangeText={e => setText(e)}
        />
        <ButtonSubmit>
          <ButtonSubmitText>Adicionar Opinião</ButtonSubmitText>
        </ButtonSubmit>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default RatingInput;
