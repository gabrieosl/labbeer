import styled from 'styled-components/native';

export const Container = styled.View``;
export const Content = styled.View`
  padding: 30px;
`;

export const BarPicture = styled.Image`
  height: 270px;
  width: 100%;
`;
export const BarTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 30px;
  line-height: 45px;

  letter-spacing: -0.24px;

  color: #1a1824;
`;
export const BarSubitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  line-height: 24px;
  margin: 15px 0;

  letter-spacing: -0.24px;

  color: #1a1824;
`;
export const AvgRating = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const AvgRatingText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  letter-spacing: -0.24px;

  color: #1a1824;
`;

export const RatingsTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  letter-spacing: -0.24px;
  margin: 20px 0;
  color: #1a1824;
`;

export const Ratings = styled.View``;
export const RatingAuthor = styled.View`
  flex-direction: row;
`;
export const AuthorAvatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 5px;
`;
export const AuthorName = styled.Text`
  flex: 1;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.24px;
  color: #000000;
  margin: 0 15px;
  align-self: center;
`;
export const RatingValue = styled.View`
  flex-direction: row;
  padding: 10px 15px;
  background: #f97115;
  border-radius: 6px;

  align-items: center;
`;
export const RatingValueText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  line-height: 18px;
  margin-right: 4px;

  color: #ffffff;
`;
export const RatingContent = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  line-height: 20px;
  margin: 20px 0;

  letter-spacing: -0.24px;

  color: #1a1824;

  opacity: 0.5;
`;
