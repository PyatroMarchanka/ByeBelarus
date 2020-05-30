import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

const EditIcon = ({ size }: { size: number }) => {
  return <AntDesign name="edit" size={size} color={colors.primary} />;
};

export default EditIcon;
