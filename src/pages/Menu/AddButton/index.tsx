import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Image, TouchableOpacity } from 'react-native';

import AddIcon from '../../../assets/Menu/Add.png';

const AddButton: React.FC<RectButtonProperties> = ({ ...props }) => (
  <TouchableOpacity {...props}>
    <Image source={AddIcon} />
  </TouchableOpacity>
);

export default AddButton;
